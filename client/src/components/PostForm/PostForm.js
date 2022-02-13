import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_POST } from '../../utils/mutations';


const PostForm = (props) => {
    const [formState, setFormState] = useState({ body: ""});

    const [createPost, { error }] = useMutation(CREATE_POST);


  return (
    <div>PostForm</div>
  )
}

export default PostForm