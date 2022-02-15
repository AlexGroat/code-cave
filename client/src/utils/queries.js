import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      posts {
        _id
        postText
        createdAt
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  {
    posts {
      _id
      postText
      postAuthor {
        _id
        username
      }
      likes {
        username
      }
      comments {
        _id
        commentAuthor
        commentText
      }
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query post($postId: ID!) {
    post(postId: $postId) {
      _id
      postText
      postAuthor {
        _id
        username
      }
      likes {
        username
      }
      comments {
        _id
        commentAuthor
        commentText
        createdAt
      }
    }
  }
`;
