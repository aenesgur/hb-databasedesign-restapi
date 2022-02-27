const mongoose = require("mongoose");

const Lesson = mongoose.model(
    "Lesson",
    new mongoose.Schema({
        name: String,
        description: String,
        photo: Object,
        course_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        }
    })
);
module.exports = Lesson;