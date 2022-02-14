import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import "./postform.css";
import { QUERY_POSTS } from "../../utils/queries";
import { ADD_POST } from "../../utils/mutations";

const PostForm = () => {
  const [postText, setPostText] = useState("");

  const [textCount, setTextCount] = useState(0);

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
        },
      });

      setPostText("");
      setTextCount(0)
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "postText" && value.length <= 280) {
      setPostText(value);
      setTextCount(value.length);
    }
  };

  console.log(postText);

  return (
    <div>
      <h3>Please login or signup to post your coding questions!</h3>

      {Auth.loggedIn() ? (
        <>
        <h3>Post your coding questions below!</h3>
          <p
            className={`m-0 ${textCount === 280 || error ? "text-danger" : ""}`}
          >
            Character Count: {textCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="postText"
                placeholder="Post your code here!"
                value={postText}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Post your code!
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to post your code. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default PostForm;
