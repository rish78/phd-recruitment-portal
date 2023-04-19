const express = require("express");

const User = require("../models/User")

const router = express.Router();

const updatePersonal = async(req, res) => {
    const {userid} = req;

    try{
        const user = await User.findOne({userid: userid});

        if(user){
            const {dob, fatherName, gender, category, marital, country, alternatePhone, alternateEmail, aadhar, address, fax} = req.body;

            let userInfo = {dob, fatherName, gender, category, marital, country, alternatePhone, alternateEmail, aadhar, address, fax}

            await user.updateOne(userInfo);
            await user.save();
            console.log(user);
            res.status(200).json({msg: "Personal details updated!"})
        }
        else{
            res.status(400).json({msg: "User not found!"})
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database error!",                                                      //Database connection error   
        });
    };
}

module.exports = {updatePersonal}