const User=require('../models/user.js');

module.exports.signup=(req,res)=>{
    res.render("users/signup.ejs");
}

module.exports.submittingSignup=async(req,res)=>{
    try{
         let  {username,email,password}=req.body;
         const newUser= new User({email,username});
         const registeredUser=await User.register(newUser,password);
         req.login(registeredUser,(err)=>{
             if(err){
                 return next(err);
             }
             req.flash("success","registration successfull!");
             res.redirect("/listings");
           });
           
        } catch(err){
        req.flash("error",err.message);
        res.redirect("/login");
        }

}

module.exports.renderLoginForm=(req,res)=>{
    res.render("users/login.ejs");
}

// Access req.session directly and clear it.
module.exports.submittinLogin=async(req,res)=>{
    req.flash("success","Welcome back to Wanderlust!");
    
    // Get the URL directly from the session 
   
    let redirectUrl = req.session.redirectUrl || "/listings";
    
    // Clear the URL from the session immediately and robustly.
    req.session.redirectUrl = null;
    
    // Redirect the user to the saved URL
    res.redirect(redirectUrl);
}

module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","you are logged out!");
        res.redirect("/listings");

    })
}