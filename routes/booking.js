const express = require("express");
const router = express.Router({ mergeParams: true });
const bookingController = require("../controllers/booking.js");
const { isLoggedIn } = require("../middleware");
const wrapAsync = require("../utils/wrapAsync");

// ** NEW ROUTE: Create Razorpay Order before payment **
router.post("/:id/create-order", isLoggedIn, wrapAsync(bookingController.createRazorpayOrder));

// 1. Show payment page (Renders payment.ejs)
router.post("/:id/payment", isLoggedIn, wrapAsync(bookingController.showPaymentPage));

// 2. Create booking (Now handles final booking creation AND payment verification)
router.post("/:id/reservations", isLoggedIn, wrapAsync(bookingController.createBooking));

// 3. Show all bookings of logged-in user
router.get("/mybookings", isLoggedIn, wrapAsync(bookingController.showUserBookings));

// 4. Cancel booking
router.delete("/:id", isLoggedIn, wrapAsync(bookingController.cancelBooking));


module.exports = router;