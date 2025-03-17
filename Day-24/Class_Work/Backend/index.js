const express = require('express');
const { connect } = require('mongoose');
const { connectDB } = require('./configs/db');
const { userRouter } = require('./routes/user.route');

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the SVU Server!");
})

app.use(userRouter)

const PORT = 4040

app.listen(PORT, async() => {
    try {
        await connectDB
        console.log("DB is Connected!");
        console.log(`Server is running at http://localhost:${PORT}`)
    } catch (error) {
        console.log(error);
    }
});

