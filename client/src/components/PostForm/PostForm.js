import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../../utils/mutations";
import Auth from "../../utils/auth";
import './postform.css'

const PostForm = () => {
  const [postText, setPostText] = useState('');

  const [textCount, setTextCount] = useState(0)

  return (
    <>
    {Auth.loggedIn() ? (
      <>
      <form className="post-form" onSubmit={handleFormSubmit}>
      <h2>Create a post:</h2>
      <input
        placeholder="Hi World!"
        name="body"
        onChange={handleChange}
        value={}
        error={error ? true : false}
      />
      <button className="btn btn-primary">Submit</button>
    </form>
      </>
    ) : (
      <>
      <div className="logged-out">
        <div className="logged-out-prompt">
          <h3 className="prompt-header">
            Welcome to the Code Cave
          </h3>
          <div className="prompt-text">
            <p className="prompt-p">
              Please Login or Signup to begin!
            </p>
          </div>
        <Link to="/login">
          <button className="btn btn-primary">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="btn btn-secondary">
            Signup
          </button>
        </Link>
        </div>
      </div>
      
      </>
    )}
    
    </>
  );
};

export default PostForm;
