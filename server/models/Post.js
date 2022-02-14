const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  postText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  postAuthor: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  comments: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }
});

const Post = model("Post", postSchema);

module.exports = Post;
