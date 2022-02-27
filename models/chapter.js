const mongoose = require("mongoose");

const Chapter = mongoose.model(
    "Chapter",
    new mongoose.Schema({
        name: String,
        photo: Object,
        lesson_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Lesson"
        }
    })
);
module.exports = Chapter;