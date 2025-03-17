const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
});

const loginSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    }
})

const userModel = mongoose.model("user", userSchema);

const loginModel = mongoose.model("login", loginSchema);

module.exports = {
    userModel,
    loginModel
}