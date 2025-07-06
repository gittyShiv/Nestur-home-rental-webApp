const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true})); //middleware
app.use(methodOverride("_method"));//middleware
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")))//middleware

main().then(()=>{
    console.log("connection working")
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Nestora');
}
// all listings route
app.get("/listings",async(req,res)=>{
    let allListings = await Listing.find();
    res.render("listings.ejs",{allListings});
})
// new route // add
app.get("/listings/new",async(req,res)=>{
    res.render("createNew.ejs");
})
// show route
app.get("/listings/:id",async(req,res)=>{
    let {id} = req.params;
    let singleList = await Listing.findById(id);
    res.render("singleList.ejs",{singleList});
})
// post route // create
app.post("/listings",async(req,res)=>{
    let{title,description,image,price,location,country} = req.body;
    await Listing.insertOne({
        title : title,
        description : description,
        image : image,
        price : price,
        location : location,
        country : country
    });
    res.redirect("/listings");
});

// edit route
app.get("/listings/:id/edit",async(req,res)=>{
    let {id} = req.params;
    let singleListing = await Listing.findById(id);
    res.render("edit.ejs",{singleListing});
})
// patch
app.put("/listings/:id",async(req,res)=>{
     let {id} = req.params;
    let{title,description,image,price,location,country} = req.body;
    await Listing.findByIdAndUpdate(id,{
        title : title,
        description : description,
        image : image,
        price : price,
        location : location,
        country : country
    });
    res.redirect("/listings");
})
app.delete("/listings/:id",async(req,res)=>{
     let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
})
app.listen(port,()=>{
    console.log("listening",port);
})