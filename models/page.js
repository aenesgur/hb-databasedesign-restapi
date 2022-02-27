const mongoose = require("mongoose");

const Page = mongoose.model(
    "Page",
    new mongoose.Schema({
        components: [{
            photo: String,
            video: String,
            paragraph: String,
            text_input: String
        }],
        chapter_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Chapter"
        }
    })
);
module.exports = Page;