const express = require('express');
const userRouter = require('./routers/user.route');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="color:red;">Welcome');
});

app.use(userRouter);
const PORT = 4040

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
