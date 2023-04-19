const express = require("express");

const User = require("../models/User")

const router = express.Router();

const getUser = async(req, res) => {
    const {userid} = req;

    try{
        const user = await User.findOne({userid: userid});

        if(user){
            console.log(user);
            res.status(200).json({msg: "User found!", user});
        }
        else{
            res.status(400).json({msg: "User not found!"})
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database error while registring user!",                                                      //Database connection error   
        });
    };
}

module.exports = {getUser}