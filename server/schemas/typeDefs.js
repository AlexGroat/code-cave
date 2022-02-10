const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type Post {
    _id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
  }

  type Comment {
    _id: ID!
    createdAt: String!
    username: String!
    body: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    getPosts: [Post]
    getPost(postId: ID!) : Post
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createPost(body: String!) : Post
    deletePost(postId: ID!) : String
    createComment(postId: String!, body: String!) : Post
    deleteComment(postId: String!, commendID: ID!): Post
    likePost(postId: ID!): Post
  }
`;

module.exports = typeDefs;
