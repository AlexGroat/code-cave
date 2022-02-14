import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
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
