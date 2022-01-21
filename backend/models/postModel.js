const mongoose = require('mongoose')

const noteSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        category: { type: String, required: true },
        user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" }
    },
    {
        timestamps: true,
    }
)

const Post = mongoose.model("Post", noteSchema)

module.exports = Post