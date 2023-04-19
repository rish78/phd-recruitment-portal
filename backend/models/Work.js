const mongoose = require("mongoose");

const WorkSchema = new mongoose.Schema({
    organization: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    fullTime: {
        type: String,
        required: true,
    },
    start: {
        type: String,
        required: true,
    },
    end: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    nature: {
        type: String,
        required: true,
    },
    
})

const Work = mongoose.model("Work", WorkSchema);
module.exports = Work;