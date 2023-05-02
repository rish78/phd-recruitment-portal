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
        qualification: {
            type: String,
            required: true,
        },
        degree: {
            type: String,
            required: true,
        },
        subject: {
            type: String,
            required: true,
        },
        collage: {
            type: String,
            required: true,
        },
        board: {
            type: String,
            required: true,
        },
        year: {
            type: String,
            required: true,
        },
        regular_cross: {
            type: String,
            required: true,
        },
        max1: {
            type: String,
            required: true,
        },
        obt1: {
            type: String,
            required: true,
        }
    }],
    jobs : [{
        organization: {
            type: String,
            required: true,
        },
        designation: {
            type: String,
            required: true,
        },
        full_time: {
            type: String,
            required: true,
        },
        job_from: {
            type: String,
            required: true,
        },
        job_to: {
            type: String,
            required: true,
        },
        amount_w: {
            type: String,
            required: true,
        },
        job: {
            type: String,
            required: true,
        }
    }]

})

const User = mongoose.model("User", UserSchema);
module.exports = User;