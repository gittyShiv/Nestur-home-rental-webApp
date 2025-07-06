const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing  = require("../models/listing.js");


main().then(()=>{
    console.log("connection working")
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Nestora');
}

const initDB = async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data); // change it acoording to github
    console.log("data was initialised");
};
initDB();

