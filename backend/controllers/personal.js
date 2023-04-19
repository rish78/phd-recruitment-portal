const express = require("express");

const User = require("../models/User")

const router = express.Router();

const updatePersonal = async(req, res) => {
    const {userid} = req;

    try{
        await User.updateOne({userid: userid}, 
            {dob, fatherName, gender, category, marital, country, alternatePhone, alternateEmail, aadhar, address, fax}, function(err, docs) {
                if(err) console.log(err);

                else{
                    console.log(docs);
                    res.status(200).json({msg: "Personal information updated!", docs})
                }
            })


           

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database error!",                                                      //Database connection error   
        });
    };
}

module.exports = {updatePersonal}