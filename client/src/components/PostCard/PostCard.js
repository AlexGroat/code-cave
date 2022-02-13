import React from "react";
import { Link } from 'react-router-dom';

function PostCard({
    post: { body, username, createdAt, id, likes, likeCount, commentCount }
}); {

    return (
        <div className="card-container">
            <div className="card-body">
            <div className="card-title">
             <h2 className="card-user">
                {username}
             </h2>
             </div>
             <div className="card-text">
                <p className="blog-text">
                    {body}
                </p>
             </div>
             </div>
        </div>
    )
}

export default PostCard;