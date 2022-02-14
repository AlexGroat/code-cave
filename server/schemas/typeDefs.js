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
    postAuthor: String!
    comments: [Comment]!
    likes: [Like]
  }

  type Comment {
    _id: ID!
    commentAuthor: String!
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
    addPost(postAuthor: String!, body: String!) : Post
    removePost(postId: ID!) : String
    addComment(postId: String!, commentAuthor: String! body: String!) : Post
    removeComment(postId: String!, commentID: ID!): Post
    likePost(postId: ID!): Post
  }
`;

console.log('end type defs')

module.exports = typeDefs;
