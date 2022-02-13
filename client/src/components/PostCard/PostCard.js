import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const PostCard = ({ post }) => {
  return (
    <Card className="post-container">
      <div className="post-body">
        <h1 className="user-name">{post.username}</h1>
        <p className="post-text">{post.body}</p>
      </div>
    </Card>
  );
};

export default PostCard;
