const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    userid: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phonenumber: {
        type: String,
        required: true,
    },
    program: {
        type: String,
    },

    fatherName: {
        type: String,

    },
    dob: {
        type: String,

    },
    gender: {
        type: String,

    },
    category: {
        type: String,

    },
    marital: {
        type: String,

    },
    country: {
        type: String,

    },
    alternatePhone: {
        type: String,
        
    },
    alternateEmail: {
        type: String,
        
    },
    aadhar: {
        type: String,

    },
    address: {
        type: String,

    },
    fax: {
        type: String,
    }, 
    education: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Academics'
    }],
    work : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Work'
    }]

})

const User = mongoose.model("User", UserSchema);
module.exports = User;