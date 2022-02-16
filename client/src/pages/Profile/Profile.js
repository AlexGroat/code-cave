import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// import PostForm from "../../components/PostForm";
import PostCard from "../../components/PostCard/PostCard";

import { QUERY_ME, QUERY_USER } from "../../utils/queries";

import Auth from "../../utils/auth";

const Profile = () => {
  const { username: currentUser } = useParams();

  const { loading, data } = useQuery(currentUser ? QUERY_USER : QUERY_ME, {
    variables: { username: currentUser },
  });

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data.username === currentUser) {
    return <Redirect to="/me" />;
  }

  return (
    <div>
      <div className="flex-row">
        <h2 className="profile-header">
          You are now viewing {currentUser ? `${user.username}'s` : "your"}{" "}
          profile.
        </h2>
      </div>

      <div className="user-posts">
        <PostCard 
        posts={user.posts}
        title={`${user.username}`} 
        />
      </div>
    </div>
  );
};

export default Profile;
