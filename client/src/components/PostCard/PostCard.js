import React from "react";
import { Link } from "react-router-dom";
import "./postcard.css";


const PostSection = ({
  posts = []
}) => {
  return (
    <div>
      {posts.slice(0, 5).map((post) => (
        <div className="single-post">
          <div className="post-header">
            <Link
              to={`/profiles/${post?.postAuthor}`}
              style={{ textDecoration: "none" }}
            >
              <h1 className="post-author">{post?.postAuthor}</h1>
            </Link>
            <p className="post-time">{post?.createdAt}</p>
          </div>
          <div className="post-text">
            <p>{post?.postText}</p>
          </div>
          <div className="post-button">
            <Link to={`/posts/${post?._id}`}> Solve the problem here!!!</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostSection;
