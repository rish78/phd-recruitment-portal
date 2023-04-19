const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User")

const router = express.Router();

const signin = async(req, res) => {
    const {password, userid} = req.body;
    try {
        const user = await User.findOne({userid: userid});
        if(user){
            if(await bcrypt.compare(password, user.password)){
                const accessToken = jwt.sign(
                    { userid,  id: user._id },
                    process.env.JWT_SECRET,
                    
                  );
                 
                  console.log("User token", accessToken)
                  res.json({ msg: "User logged in!", accessToken});
            }
            else{
                res.status(400).json({msg: "Incorrect password!"});
            }
        }
        else{
            res.status(400).json({msg: "Email not registered!"})
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database error while registring user!",                                                      //Database connection error   
        });
    };
}

module.exports = {signin};