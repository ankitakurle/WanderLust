const express = require("express");
const router = express.Router({ mergeParams: true });
const bookingController = require("../controllers/booking.js");
const { isLoggedIn } = require("../middleware");
const wrapAsync = require("../utils/wrapAsync");

// 1. Show payment page
router.post("/:id/payment", isLoggedIn, wrapAsync(bookingController.showPaymentPage));

// 2. Create booking
router.post("/:id/reservations", isLoggedIn, wrapAsync(bookingController.createBooking));

// 3. Show all bookings of logged-in user
router.get("/mybookings", isLoggedIn, wrapAsync(bookingController.showUserBookings));

// 4. Cancel booking
router.delete("/:id", isLoggedIn, wrapAsync(bookingController.cancelBooking));


module.exports = router;

