import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Comments from '../../components/Comments/Comments';
import CommentForm from '../../components/CommentForm/CommentForm';

import { QUERY_SINGLE_POST } from '../../utils/queries';
import './singlepost.css'

const SinglePost = () => {
// Use `useParams()` to retrieve value of the route parameter `:postId` in App.js

const { postId } = useParams();

const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    // passing the url parameter
    variables: { postId: postId },
});

const post = data?.post || {};

if (loading) {
    return <div>Retrieving Post</div>
}

  return (
    <div className="my-3">
    <h3 className="card-header bg-info text-light">
      {post.postAuthor} <br />
      <span style={{ fontSize: '1rem' }}>
        had this post on {post.createdAt}
      </span>
    </h3>
    <div className="bg-light py-4">
      <blockquote
        className="p-4"
        style={{
          fontSize: '1.5rem',
          fontStyle: 'italic',
          border: '2px dotted #1a1a1a',
          lineHeight: '1.5',
        }}
      >
        {post.postText}
      </blockquote>
    </div>

    <div className="my-5">
      <Comments comments={post.comments} />
    </div>
    <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
      <CommentForm postId={post._id} />
    </div>
  </div>
  )
}

export default SinglePost