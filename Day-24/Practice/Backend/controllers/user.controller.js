const bcrypt = require('bcrypt');
const { userModel } = require('../models/user.model');


const signUp = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const userData = new userModel({ username, email, password: hashedPassword });

        await userData.save();
        return res.status(201).send({ message: "User registered successfully" });

    } catch (error) {
        return res.status(500).send({ error: "Register Using Correct Way" });
    }
};


const logIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (user && isPasswordValid) {
            return res.status(200).send({ message: "User Login Successfully" });
        }else{
            return res.status(400).send({ message: "Invalid email or password" });
        }
        
    } catch (error) {
        return res.status(500).send({ error: "Are you Registered user? I think NOT" });
    }
};



module.exports = {
    signUp,
    logIn
}
