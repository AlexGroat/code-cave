import React from "react";
import { Link } from "react-router-dom";
import "./postcard.css";

const PostSection = ({
  posts,
  header,
  showHeader = true,
  showPostAuthor = true,
}) => {
  return (
    <div>
      {showHeader && <h3>{header}</h3>}
      {posts &&
        posts.map((post) => (
          <div key={post?._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showPostAuthor ? (
                <Link
                  className="text-light"
                  to={`/profiles/${post?.postAuthor}`}
                >
                  {post?.postAuthor} <br />
                  <span style={{ fontSize: "1rem" }}>
                    had this thought on {post?.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: "1rem" }}>
                    You had this thought on {post?.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{post?.postText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/posts/${post?._id}`}
            >
              Join the discussion on this thought.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PostSection;