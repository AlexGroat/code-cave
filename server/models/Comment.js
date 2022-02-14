const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
    commentId: {
        type: String,
        required: true,
    },
    commentAuthor: {
        type: String,
        required: true,
    },
    body: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;