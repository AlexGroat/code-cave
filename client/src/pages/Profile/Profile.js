import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import PostForm from "../../components/PostForm/PostForm";
import PostCard from "../../components/PostCard/PostCard";

import { QUERY_ME, QUERY_USER } from "../../utils/queries";

import Auth from "../../utils/auth";

const Profile = () => {
  const { username: currentUser } = useParams();

  const { loading, data } = useQuery(currentUser ? QUERY_USER : QUERY_ME, {
    variables: { username: currentUser },
  });

  const user = data?.me || data?.user || {};


  return (
    <div>
    <div className="flex-row justify-center mb-3">
      <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
        Welcome to {currentUser ? `${user.username}'s` : 'your'} profile.
      </h2>

      <div className="col-12 col-md-10 mb-5">
        <PostCard
          posts={user.posts}
          title={`${user.username}'s thoughts...`}
          showTitle={false}
          showUsername={false}
        />
      </div>
      {!currentUser && (
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <PostForm />
          
        </div>
      )}
    </div>
  </div>
  );
};

export default Profile;
