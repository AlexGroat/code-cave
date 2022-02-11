const { AuthenticationError } = require("apollo-server-express");
const { User, Post } = require("../models");
const { signToken } = require("../utils/auth");

console.log('start resolvers')

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
      return await Post.findById(_id).populate("comments")
    }
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
  },
};

console.log('end resolver')

module.exports = resolvers;
