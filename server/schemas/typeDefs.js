const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Post {
    _id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]
  }

  type Comment {
    _id: ID!
    createdAt: String!
    username: String!
    body: String!
  }

  type Like {
    _id: ID!
    username: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    Posts: [Post]
    Post(postId: ID!) : Post
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
