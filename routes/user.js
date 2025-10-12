const express=require("express");
const router=express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport=require('passport');
const { saveRedirectUrl } = require("../middleware.js");
const userController=require("../controllers/user.js");

router.route("/signup")
.get(userController.signup)
.post(wrapAsync(userController.submittingSignup));


router.route("/login")
.get(userController.renderLoginForm)
.post(
    saveRedirectUrl,
    passport.authenticate("local",{ 
    failureRedirect: "/login",
    failureFlash:true}), 
    userController.submittinLogin);


router.get("/logout",userController.logout);

module.exports=router;

// router.get("/signup",userController.signup);


// router.post("/signup", wrapAsync(userController.submittingSignup));

// router.get("/login",userController.renderLoginForm);

// router.post("/login", 
//     saveRedirectUrl,
//     passport.authenticate("local",{ 
//     failureRedirect: "/login",
//     failureFlash:true}), 
//     userController.submittinLogin);


