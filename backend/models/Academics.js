const mongoose = require("mongoose");

const AcademicsSchema = new mongoose.Schema({
    qualification: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    college: {
        type: String,
        required: true,
    },
    university: {
        type: String,
        required: true,
    },
    passingYear: {
        type: String,
        required: true,
    },
    regOrCorr: {
        type: String,
        required: true,
    },
    maxMarks: {
        type: String,
        required: true,
    },
    obtMarks: {
        type: String,
        required: true,
    },
})

const Academics = mongoose.model("Academics", AcademicsSchema);
module.exports = Academics;