const { gql } = require("apollo-server-express");
console.log('Start type defs')

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
    username: String!
    body: String!
    createdAt: String!
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
    posts: [Post]
    post(postId: ID!) : Post
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

console.log('end type defs')

module.exports = typeDefs;
