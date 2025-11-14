const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    // Reference to the User who made the booking
    booker: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    // Reference to the Listing that was booked
    listing: {
        type: Schema.Types.ObjectId,
        ref: 'Listing',
        required: true
    },

    // Booking Details
    checkInDate: {
        type: Date,
        required: true
    },
    checkOutDate: {
        type: Date,
        required: true
    },
    guests: {
        type: Number,
        required: true,
        min: 1
    },

    // Financial Details
    totalPrice: {
        type: Number,
        required: true
    },

    // Payment Info
    paymentStatus: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
    },
    paymentMethod: {
        type: String,
        // ** UPDATED: Added 'razorpay' **
        enum: ['upi_qr', 'upi_id', 'card', 'net_banking', 'razorpay'],
        default: 'razorpay'
    },
    // ** NEW: Store Razorpay Payment ID for verification/reference **
    razorpayPaymentId: {
        type: String,
        required: function() { return this.paymentStatus === 'completed'; } // Required if payment is completed
    },

    // Metadata
    bookedAt: {
        type: Date,
        default: Date.now
    }
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
