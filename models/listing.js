const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    title:String,
    description:String,
    image :{
     type : String,
     default:"https://images.unsplash.com/photo-1480074568708-e7b720bb3f09",
     set : (v)=>(v==="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09"?link:v)
    },
    price :Number,
    location :String,
    country :String,
})
const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;