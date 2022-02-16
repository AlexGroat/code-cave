import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Comments from '../../components/Comments/Comments';
import CommentForm from '../../components/CommentForm/CommentForm';

import { QUERY_SINGLE_POST } from '../../utils/queries';

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
    <div>SinglePost</div>
  )
}

export default SinglePost