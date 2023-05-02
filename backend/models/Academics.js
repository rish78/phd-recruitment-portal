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
    },
})

const Academics = mongoose.model("Academics", AcademicsSchema);
module.exports = Academics;