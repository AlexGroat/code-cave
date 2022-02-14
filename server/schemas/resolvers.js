const { AuthenticationError } = require("apollo-server-express");
const { User, Post } = require("../models");
const { signToken } = require("../utils/auth");

console.log("start resolvers");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("posts");
    },

    user: async (parent, { _id }) => {
      return User.findOne({ _id }).populate("posts");
    },

    posts: async () => {
      return await Post.find().populate("comments");
    },

    post: async (parent, { _id }) => {
      return await Post.findById(_id).populate("comments");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    addPost: async (parent, { username, postAuthor }) => {
      const post = await Post.create({ username, postAuthor });

      await User.findOneAndUpdate(
        { username: thoughtAuthor },
        { $addToSet: { posts: post._id } }
      );

      return post;
    },

    removePost: async (parent, { postId }) => {
      return Post.findByIdAndDelete({ _id: postId });
    },

    addComment: async (parent, { postId, postAuthor, body }) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        {
          $addToSet: { comments: { postAuthor, body } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    removeComment: async (parent, { postId, commentId }) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

console.log("end resolver");

module.exports = resolvers;
