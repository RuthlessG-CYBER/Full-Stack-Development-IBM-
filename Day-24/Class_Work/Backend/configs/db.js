const mongoose = require("mongoose");

const connectDB = mongoose.connect("mongodb+srv://soumya605:soumya@cluster0.8yzdg.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0")

module.exports  = {
    connectDB
}