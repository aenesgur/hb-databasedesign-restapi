const mongoose = require("mongoose");

const Course = mongoose.model(
    "Course",
    new mongoose.Schema({
        name: String,
        identifier: String,
        language: {
            type: String,
            enum: ['TR', 'US'],
            default: 'TR'
        },
        description: String,
        photo: Object
    })
);
module.exports = Course;