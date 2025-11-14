// services/razorpay.js
if(process.env.NODE_ENV!="production"){
    // NOTE: Your app.js already handles dotenv, but keeping this here for robustness 
    // if the service file is used independently.
    require('dotenv').config();
}

const Razorpay = require('razorpay');

// Initialize Razorpay with keys from the environment variables
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

module.exports = razorpay;