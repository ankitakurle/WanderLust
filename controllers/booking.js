const Listing = require('../models/listing');
const Booking = require('../models/booking');
const User = require('../models/user'); 


const calculatePrice = (listingPrice, checkInDate, checkOutDate) => {
    const startDate = new Date(checkInDate);
    const endDate = new Date(checkOutDate);

    // Calculate difference in days (number of nights)
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Ensure at least 1 night is calculated if dates are valid, though validation should prevent 0 or less.
    const numberOfNights = diffDays > 0 ? diffDays : 1; 

    // Base price before taxes/GST
    const subTotal = numberOfNights * listingPrice; 
    
    // GST CALCULATION (18%)
    const gstRate = 0.18; 
    const gstAmount = subTotal * gstRate;
    const finalPrice = subTotal + gstAmount; 
    
    return {
        numberOfNights,
        subTotal,
        gstAmount,
        finalPrice
    };
};



//createBooking 
module.exports.createBooking = async (req, res) => {

    const { id } = req.params;

    //Ensure booking data exists
    if (!req.body.booking) {
        req.flash('error', 'Booking data is missing. Please select dates and guests.');
        return res.redirect(`/listings/${id}`); 
    }
    
    
    const { checkInDate, checkOutDate, guests } = req.body.booking; 

    // Fetch the Listing details
    const listing = await Listing.findById(id);
    
    if (!listing) {
        req.flash('error', 'Listing not found.');
        return res.redirect('/');
    }

    // Date Validation 
    const startDate = new Date(checkInDate);
    const endDate = new Date(checkOutDate);

    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    
    const checkInDay = new Date(startDate);
    checkInDay.setHours(0, 0, 0, 0);
    
    if (checkInDay < today) {
        req.flash('error', 'The check-in date cannot be in the past.');
        return res.redirect(`/listings/${id}`);
    }
    
    // Check for valid dates (Check-out must be after Check-in)
    if (endDate <= startDate || isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        req.flash('error', 'Please choose valid check-in and check-out dates (Check-out must be after Check-in).');
        return res.redirect(`/listings/${id}`);
    }

   
    const { subTotal, gstAmount, finalPrice } = calculatePrice(listing.price, checkInDate, checkOutDate);
   
    //Create new booking
    const newBooking = new Booking({
        booker: req.user._id, 
        listing: id,
        checkInDate: startDate,
        checkOutDate: endDate,
        guests: guests,
        totalPrice: finalPrice, 
    });
    await newBooking.save();

    // Ensure the 'bookings' array exists on the User object
    if (!req.user.bookings) {
        req.user.bookings = [];
    }
    req.user.bookings.push(newBooking._id);
    await req.user.save();

    //  Ensure the 'bookings' array exists on the Listing object
    if (!listing.bookings) {
        listing.bookings = [];
    }
    listing.bookings.push(newBooking._id);
    await listing.save();

    // Set Flash Message and Redirect
    const checkIn = startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const checkOut = endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    req.flash(
    'success', 
    `🎉 Booking Confirmed! Your stay at <b>${listing.title}</b> is reserved from <b>${checkIn}</b> to <b>${checkOut}</b>. ` +
    `Subtotal: ₹${subTotal.toLocaleString("en-IN")}. GST (18%): ₹${gstAmount.toLocaleString("en-IN")}. ` +
    `Total Price (Inc. GST): <b>₹${finalPrice.toLocaleString("en-IN")}</b>.`
);
    
    res.redirect(`/listings/${id}`); 
};


//showUserBookings 
module.exports.showUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ booker: req.user._id })
            .populate("listing")
            .sort({ bookedAt: -1 });

        res.render("bookings/mybookings.ejs", { bookings });
    } catch (err) {
        console.error("Error loading bookings:", err);
        req.flash("error", "Unable to load your bookings right now.");
        res.redirect("/listings");
    }
};

// cancelBooking
module.exports.cancelBooking = async (req, res) => {
    const { id } = req.params; // id is the booking _id

    try {
        const booking = await Booking.findById(id).populate("listing").populate("booker");
        if (!booking) {
            req.flash("error", "Booking not found!");
            return res.redirect("/bookings/mybookings");
        }

        // Only the user who made the booking can cancel it
        if (!booking.booker._id.equals(req.user._id)) {
            req.flash("error", "You are not authorized to cancel this booking!");
            return res.redirect("/bookings/mybookings");
        }

        // Remove booking id from user's bookings array (if present)
        await User.findByIdAndUpdate(req.user._id, { $pull: { bookings: booking._id } });

        // Remove booking id from listing's bookings array (if present)
        if (booking.listing && booking.listing._id) {
            await Listing.findByIdAndUpdate(booking.listing._id, { $pull: { bookings: booking._id } });
        }

        // Delete the booking document
        await Booking.findByIdAndDelete(booking._id);

        req.flash("success", "Your booking has been successfully cancelled.");
        res.redirect("/bookings/mybookings");
    } catch (err) {
        console.error("Error cancelling booking:", err);
        req.flash("error", "Something went wrong while cancelling the booking.");
        res.redirect("/bookings/mybookings");
    }
};

//showPaymentPage 
module.exports.showPaymentPage = async (req, res) => {
    const { id } = req.params;
    const bookingDetails = req.body.booking; 

    // Basic data validation
    if (!bookingDetails || !bookingDetails.checkInDate || !bookingDetails.checkOutDate || !bookingDetails.guests) {
        req.flash('error', 'Please select valid check-in date, check-out date, and number of guests.');
        return res.redirect(`/listings/${id}`);
    }

    const { checkInDate, checkOutDate, guests } = bookingDetails;
    
    // Fetch the Listing details
    const listing = await Listing.findById(id);
    
    if (!listing) {
        req.flash('error', 'Listing not found.');
        return res.redirect('/');
    }

    // Date Validation (Re-check on server side)
    const startDate = new Date(checkInDate);
    const endDate = new Date(checkOutDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    
    if (new Date(startDate).setHours(0,0,0,0) < today || endDate <= startDate) {
        req.flash('error', 'Invalid dates selected. Check-in must be today or later, and Check-out must be after Check-in.');
        return res.redirect(`/listings/${id}`);
    }

   
    const priceDetails = calculatePrice(listing.price, checkInDate, checkOutDate);

    // Render the payment view
    res.render("bookings/payment", { 
        listing, 
        bookingDetails, 
        ...priceDetails // Spread the calculated prices and nights
    });
};
