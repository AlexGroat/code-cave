import React from "react";
import { Link, useParams } from "react-router-dom";
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

  const user = data?.user || {};

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Welcome to {currentUser ? `${user.username}'s` : "your"} profile.
        </h2>

        {Auth.loggedIn() ? (
          <div>
            <div>
              <PostCard posts={user.posts} />
            </div>
          </div>
        ) : (
          <>
            <p>
              You need to be logged in to view {user.username}'s coding posts.
              Please <Link to="/login">login</Link> or{" "}
              <Link to="/signup">signup.</Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
