const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const Review=require("./reviews.js")


const listingSchema= new Schema({
    title:{
        type:String,
        required:true,
        
    },
    description:{
        type:String,
    },
    bedrooms:{
        type:Number,
    },
    guests:{
        type:Number,
    },
    image:{
        url:String,
        filename:String,
        // type: String,
        // set: (v) =>
        //     v === ""
        //         ? "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        //         : v,
    },

    price:{
        type:Number,
    },
    location:{
        type:String,
    },
    country:{
        type:String,
    },
    reviews:[
        {
        type: Schema.Types.ObjectId,
        ref:"Review",
        },
    ],
    owner:{
        type: Schema.Types.ObjectId,
        ref:"User",
    },
    category: {
        type: String,
        enum: [
            "Trending",
            "Beaches",
            "Iconic Cities",
            "Rooms",
            "Mountains",
            "Amazing Pools",
            "Arctic",
            "Farms",
            "Camping",
            "Luxury",
            "Lakes",
        ],
        required: true
    }

});

listingSchema.post("findOneAndDelete",async(listing)=>{
    if (listing){
        await Review.deleteMany({_id:{$in: listing.reviews}});
    }
})


const Listing=mongoose.model("Listing", listingSchema);
module.exports=Listing;