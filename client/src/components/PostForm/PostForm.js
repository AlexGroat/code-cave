import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import "./postform.css";

import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS } from "../../utils/queries";

const PostForm = () => {
  const [postText, setPostText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });

        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (err) {
        console.error(err);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: {
          postText,
          postAuthor: Auth.getProfile().data.username,
        },
      });

      setPostText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "postText" && value.length <= 280) {
      setPostText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div className="add-post">
      {Auth.loggedIn() ? (
        <>
          <h3 className="post-header"> Post your coding questions!</h3>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <div className="mt-2 code-input">
            <form
              className="flex-row justify-center justify-space-between-md align-center"
              onSubmit={handleFormSubmit}
            >
              <div className="code-input">
                <textarea
                  name="postText"
                  placeholder="Post your code here!"
                  value={postText}
                  className="form-input w-100"
                  style={{ lineHeight: "1.5", resize: "vertical" }}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button className="btn btn-primary btn-block py-3" type="submit">
                Post your code!
              </button>
            </form>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </>
      ) : (
       <div className="login-or-signup">
         <p>New to codecave or a returning coder?</p>
         <Link to="/login">Login</Link>
       {' '} or {' '}
         <Link to="/signup">Signup</Link>
         </div>
      )}
    </div>
  );
};

export default PostForm;
