const express = require("express");

const User = require("../models/User")

const router = express.Router();

const updatePersonal = async(req, res) => {
    const {userid} = req;
    const {dob, fatherName, gender, category, marital, country, alternatePhone, alternateEmail, aadhar, address, fax} = req.body;
    try{
        await User.updateOne({userid: userid}, 
            {dob, fatherName, gender, category, marital, country, alternatePhone, alternateEmail, aadhar, address, fax}).then((docs)=> {
                console.log(docs);
                    res.status(200).json({msg: "Personal information updated!", docs})
            })


           

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database error!",                                                      //Database connection error   
        });
    };
}

module.exports = {updatePersonal}