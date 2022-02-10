const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  body: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      body: String,
      username: String,
      createdAt: String,
    },
  ],
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

const Post = model("Post", postSchema);

module.exports = Post;
