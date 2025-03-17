const mongoose = require("mongoose");

const connectDB = mongoose.connect("mongodb+srv://pandasoumya604:soumya@cluster0.m2cxy.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0")

module.exports  = {
    connectDB
}