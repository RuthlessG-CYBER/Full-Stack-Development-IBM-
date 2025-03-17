const express = require('express');
const { signUp, logIn } = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.post("/register", signUp);
userRouter.post("/login", logIn);


module.exports = {
    userRouter
}