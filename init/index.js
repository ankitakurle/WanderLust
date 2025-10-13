if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const mongoose=require('mongoose');
const initData=require("./data.js");
const Listing=require("../models/listing.js");
const User = require("../models/user.js");


// const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";
const DB_url=process.env.ATLAS_DB_URL;


main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(DB_url);
}

const initDB=async()=>{
    await Listing.deleteMany({});
    await User.deleteMany({}); 
    
    const user = new User({
    username: "juhi",
    email: "juhi@gmail.com"
   });
    const registeredUser = await User.register(user, "juhi"); // ✅ hashes password

    const listingsWithOwner = initData.data.map((obj) => ({
    ...obj,
    owner: registeredUser._id,
    }));

    await Listing.insertMany(listingsWithOwner);
    console.log("Data initialized with owner:", registeredUser._id);
  };



initDB();

