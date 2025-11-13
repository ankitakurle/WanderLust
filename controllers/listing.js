const Listing=require('../models/listing.js');

module.exports.index = async (req, res) => {
    const { category } = req.query;
    let allListings;
    if (category) {
        allListings = await Listing.find({ category });
    } else {
        allListings = await Listing.find({});
    }
    res.render("listings/index.ejs", { allListings, activeCategory: category || '' });
    
};

module.exports.search=async (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.redirect("/listings");
  }

  const listings = await Listing.find({
    $or: [
      { title: { $regex: query, $options: "i" } },
      { location: { $regex: query, $options: "i" } },
      { country: { $regex: query, $options: "i" } }
    ]
 
  });

  res.render("listings/searchResults.ejs", { listings, query });
}

module.exports.newRenderForm=(req, res) => {
    res.render("listings/new.ejs");  
}

module.exports.showListing=async (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id)
    .populate({
        path:"reviews",
        populate:{
            path:"author",
            model: "User",
        },
    })
    .populate("owner");
    if(!listing){
         req.flash("error","Place you requested does not exist");
         res.redirect("/listings")
    }else{
    res.render("listings/show.ejs",{listing})
    }
    }

module.exports.createListing=async(req,res,next)=>{
    let url=req.file.path;
    let filename=req.file.filename;

    const newlisting= new Listing(req.body.listing);
    newlisting.owner=req.user._id;
    newlisting.image={url,filename};
    await newlisting.save();
    req.flash("success","New place Added Successfully");
    res.redirect("/listings");
    
}

module.exports.editListing=async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
     if(!listing){
         req.flash("error","places you requested does not exist");
         res.redirect("/listings")
    }else{
        let originalImageUrl=listing.image.url;
        originalImageUrl=originalImageUrl.replace("/upload","/upload/,w_250")
        res.render("listings/edit.ejs",{listing,originalImageUrl});
    }
}

module.exports.updateListing=async(req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findByIdAndUpdate(id,{...req.body.listing} );
    
    if(typeof req.file!=="undefined"){
        let url=req.file.path;
        let filename=req.file.filename;
        listing.image={url,filename};
        await listing.save();
    }
   
    
    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);

};

module.exports.destroyListing=async(req,res)=>{
    let {id}=req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
     req.flash("success","Place Deleted Successfully");
    res.redirect("/listings")
}


