import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_COMMENT } from '../../utils/mutations';

import Auth from '../../utils/auth';

// pass postId as props
const CommentForm = ({ postId }) => {
  const [commentText, setCommentText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          postId,
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        }
      });

      setCommentText('')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>CommentForm</div>
  )
}

export default CommentForm