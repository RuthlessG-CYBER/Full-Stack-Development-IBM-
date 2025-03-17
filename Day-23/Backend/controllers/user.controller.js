export const login = (req, res) => {
    const data = req.body;
    try {
        if (data.email == "" && data.password == ""){
            return res.status(400).send({message: "Email and Password are required"});
        }else{
            return res.status(200).send({message: "Login Successful"});
        }
    } catch (error) {
        return res.status(400).send({message: error.message});
    }
}
export const signup = (req, res) => {
    const data = req.body;
    try {
        if(!data){
            return res.status(400).send({message:"Data not found"});
        }else{
            return res.status(200).send({message: "User SignUp in successfully"});
        }
    } catch (error) {
        return res.status(400).send({message: error.message});
    }
}

//same as above for access the saperate login and signup
// module.exports = {
//     login,
//     signup
// }