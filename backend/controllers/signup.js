const express = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/User")

const router = express.Router();

const signup = async(req, res) => {
    const {name, email, password, userid, phonenumber, program} = req.body;
    try {
        const user = await User.findOne({email: email})

        if (user) {
            return res.status(400).json({
                error: "Email already there, No need to register again.",
            });
        }
        else{
            const salt = await bcrypt.genSaltSync(10);
            let pass = await bcrypt.hash(password, salt);
               
            let newUser = {name, email, userid, phonenumber, password:pass, program};
            const customer = new User(newUser);
            const data = await customer.save();
            console.log(data);
            res.status(200).json({msg: "New user created..", customer});  
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database error while registring user!",                                                      //Database connection error   
        });
    };
}

module.exports = {signup};