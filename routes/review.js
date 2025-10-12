const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const {validateReview,isLoggedIn,isAuthor}=require("../middleware.js");
const reviewController= require("../controllers/review.js");



// reviews
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.postReview));


//delete review route
router.delete("/:reviewId",isLoggedIn,isAuthor,wrapAsync(reviewController.deletePost));

module.exports = router;