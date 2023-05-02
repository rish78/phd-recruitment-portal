const express = require("express");

const User = require("../models/User")

const router = express.Router();

const updateAcads = async(req, res) => {
    const {userid} = req;
    console.log(req.body.arr)
    try{
        await User.updateOne({userid: userid}, 
            {education: req.body.arr}).then((docs) => {
                console.log(docs);
                res.status(200).json({msg: "Academic information updated!", docs})
            })


           

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database error!",                                                      //Database connection error   
        });
    };
}

module.exports = {updateAcads}