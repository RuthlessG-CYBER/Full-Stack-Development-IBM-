const bcrypt = require('bcrypt');
const { userModel } = require('../models/user.model');

const signUp = async(req, res) => {
    const {username,email, password} = req.body;

    try{
        bcrypt.hash(password, 5, async(err, hash) => {  
            if (err){
                return res.status(400).send({error: err.message});
            }else{
                const userData = new userModel({username, email, password:hash})
                console.log(userData);
                await userData.save()
                return res.status(200).send({massage: "User registered successfully"})
            }
        });
       
    } catch {
        return res.status(400).send({error: error.message});
    }
}

module.exports = {
    signUp
}
