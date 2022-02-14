import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Auth from "../../utils/auth";

const PostCard = ({ posts }) => {
 
  return (
    <div>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {post?.postAuthor?.username} <br />
              <span style={{ fontSize: "1rem" }}>
                had this thought on {post.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{post.postText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/posts/${post._id}`}
            >
              Join the discussion on this thought.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PostCard;
