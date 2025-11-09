const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");
const listingController= require("../controllers/listing.js");
const multer  = require('multer')
const {storage}=require("../cloudconfig.js")
const upload = multer({ storage })
const Listing = require("../models/listing.js");
const bookingController = require("../controllers/booking.js");




router
.route("/")
.get(wrapAsync(listingController.index))
.post(
    isLoggedIn, 
    validateListing,
    upload.single('listing[image]'),
    wrapAsync(listingController.createListing));
// upload.single('listing[image]'

router.get("/search",listingController.search );

// Route: POST /listings/:id/reservations
router.post(
    "/:id/reservations", 
    isLoggedIn, 
    wrapAsync(bookingController.createBooking)
);
// new route (must come before :id route)
router.get("/new", isLoggedIn, listingController.newRenderForm);

router.route("/:id")
.get(listingController.showListing)
.put(isLoggedIn,
    isOwner, 
    upload.single('listing[image]'),
    validateListing, 
    wrapAsync(listingController.updateListing))
.delete(isLoggedIn, 
    isOwner, 
    wrapAsync(listingController.destroyListing)
);




//edit route
router.get("/:id/edit", isLoggedIn,isOwner,wrapAsync(listingController.editListing));



module.exports=router;

// //index route
// router.get("/",wrapAsync(listingController.index));



//show route
// router.get("/:id",listingController.showListing);



// //create route
// router.post("/",isLoggedIn, validateListing, wrapAsync(listingController.createListing));





//update route
// router.put("/:id", isLoggedIn,isOwner, validateListing, wrapAsync(listingController.updateListing)
// );

//destroy route
// router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.destroyListing)
// );


