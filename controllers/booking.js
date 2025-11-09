const Listing = require('../models/listing');
const Booking = require('../models/booking');
// You'll need to use wrapAsync in the router, not the controller function itself

module.exports.createBooking = async (req, res) => {
    
    
    const { id } = req.params;

    //SAFETY CHECK 1: Ensure booking data exists
    if (!req.body.booking) {
        req.flash('error', 'Booking data is missing. Please select dates and guests.');
        return res.redirect(`/listings/${id}`); 
    }
    
    // It's now safe to destructure the data
    const { checkInDate, checkOutDate, guests } = req.body.booking; 

    // Fetch the Listing details
    const listing = await Listing.findById(id);
    
    if (!listing) {
        req.flash('error', 'Listing not found.');
        return res.redirect('/');
    }

    // --- Date Validation and Price Calculation ---
    const startDate = new Date(checkInDate);
    const endDate = new Date(checkOutDate);

    // NEW VALIDATION: Check if Check-In Date is in the past 🛑 ---
    const today = new Date();
    // Set the time of 'today' to midnight (00:00:00) so we only compare the date
    today.setHours(0, 0, 0, 0); 
    
    // Set the time of 'startDate' to midnight for a clean date-only comparison
    const checkInDay = new Date(startDate);
    checkInDay.setHours(0, 0, 0, 0);
    
    if (checkInDay < today) {
        req.flash('error', 'The check-in date cannot be in the past.');
        return res.redirect(`/listings/${id}`);
    }
    // --- END NEW VALIDATION ---
    
    
    // Check for valid dates (Check-out must be after Check-in)
    if (endDate <= startDate || isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        req.flash('error', 'Please choose valid check-in and check-out dates (Check-out must be after Check-in).');
        return res.redirect(`/listings/${id}`);
    }

    // Calculate base price (Subtotal)
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Base price before taxes/GST
    const subTotal = diffDays * listing.price; 
    
    // ⭐ GST CALCULATION (18%) ⭐
    const gstRate = 0.18; 
    const gstAmount = subTotal * gstRate;
    const finalPrice = subTotal + gstAmount; 
    // -------------------------------------------

    // Transaction logic: Create new booking
    const newBooking = new Booking({
        booker: req.user._id, 
        listing: id,
        checkInDate: startDate,
        checkOutDate: endDate,
        guests: guests,
        // CRITICAL: Save the price including GST to the database
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
    // The listing title, check-in, and check-out dates are now bold
    `🎉 Booking Confirmed! Your stay at <b>${listing.title}</b> is reserved from <b>${checkIn}</b> to <b>${checkOut}</b>. ` +
    `Subtotal: ₹${subTotal.toLocaleString("en-IN")}. GST (18%): ₹${gstAmount.toLocaleString("en-IN")}. ` +
    // The final price is now bold
    `Total Price (Inc. GST): <b>₹${finalPrice.toLocaleString("en-IN")}</b>.`
);
    
    res.redirect(`/listings/${id}`); 
};