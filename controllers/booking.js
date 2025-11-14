// controllers/booking.js
const Listing = require('../models/listing');
const Booking = require('../models/booking');
const User = require('../models/user'); 
// ** NEW: Require Razorpay Service **
const razorpay = require('../services/razorpay'); 
// ** NEW: Require crypto for signature verification **
const crypto = require('crypto');

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

// ** NEW: Function to create Razorpay Order (Server-Side) **
module.exports.createRazorpayOrder = async (req, res) => {
    try {
        const { id } = req.params; // Listing ID
        // Note: req.body is correctly parsed as JSON now due to app.use(express.json())
        const { checkInDate, checkOutDate, guests } = req.body; 

        if (!checkInDate || !checkOutDate || !guests) {
            return res.status(400).json({ error: 'Missing booking details.' });
        }

        const listing = await Listing.findById(id);
        if (!listing) {
            return res.status(404).json({ error: 'Listing not found.' });
        }
        
        const { finalPrice } = calculatePrice(listing.price, checkInDate, checkOutDate);
        
        // Razorpay expects amount in the smallest currency unit (Paisa)
        const amountInPaisa = Math.round(finalPrice * 100); 
        
        // --- FIX FOR RECEIPT LENGTH ERROR (BAD_REQUEST_ERROR) ---
        const shortListingId = id.substring(0, 8); // Use first 8 characters of listing ID
        const timestamp = Date.now();

        const options = {
            amount: amountInPaisa, 
            currency: "INR",
            receipt: `order_${shortListingId}_${timestamp}`, // Shortened to fit the < 40 char limit
            payment_capture: '1' 
        };

        const order = await razorpay.orders.create(options);
        
        res.status(200).json(order); // Send the order details to the client
        
    } catch (err) {
        // Log the full error to help debug other issues, but send a generic message to the client
        console.error("Razorpay Order Creation Error:", err);
        res.status(500).json({ error: "Failed to create Razorpay Order" });
    }
};

// ** MODIFIED: createBooking (Handles Payment Verification) **
module.exports.createBooking = async (req, res) => {

    const { id } = req.params;

    // Extract payment proof from the form submission after Razorpay success
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
    
    // ** 1. Payment Verification (Security Check) **
    if (razorpay_payment_id && razorpay_order_id && razorpay_signature) {
        
        // Verify Signature using Razorpay Key Secret from .env
        const generated_signature = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(razorpay_order_id + "|" + razorpay_payment_id)
            .digest('hex');

        if (generated_signature !== razorpay_signature) {
            req.flash('error', 'Payment verification failed. Please contact support. No booking created.');
            return res.redirect(`/listings/${id}`); 
        }
    } else {
        // If the route is hit without payment proof
        req.flash('error', 'Payment transaction was not completed or details are missing. Please try again.');
        return res.redirect(`/listings/${id}`); 
    }


    //Ensure booking data exists (Booking data comes nested under 'booking' from the EJS form)
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
    
    if (endDate <= startDate || isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        req.flash('error', 'Please choose valid check-in and check-out dates (Check-out must be after Check-in).');
        return res.redirect(`/listings/${id}`);
    }

   
    const { subTotal, gstAmount, finalPrice } = calculatePrice(listing.price, checkInDate, checkOutDate);
   
    // ** 2. Create new booking (only after successful payment verification) **
    const newBooking = new Booking({
        booker: req.user._id, 
        listing: id,
        checkInDate: startDate,
        checkOutDate: endDate,
        guests: guests,
        totalPrice: finalPrice, 
        // ** Update Payment Status/Info **
        paymentStatus: 'completed', 
        paymentMethod: 'razorpay',
        razorpayPaymentId: razorpay_payment_id // Save the ID
    });
    await newBooking.save();

    // 3. Update User and Listing
    if (!req.user.bookings) {
        req.user.bookings = [];
    }
    req.user.bookings.push(newBooking._id);
    await req.user.save();

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
    `✅ Payment Successful! Your stay at <b>${listing.title}</b> is reserved from <b>${checkIn}</b> to <b>${checkOut}</b>. Total Price: <b>₹${finalPrice.toLocaleString("en-IN")}</b>.`
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

// ** MODIFIED: showPaymentPage (Passes Razorpay Key ID) **
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
        ...priceDetails, // Spread the calculated prices and nights
        razorpayKeyId: process.env.RAZORPAY_KEY_ID // Pass the key to the frontend
    });
};
