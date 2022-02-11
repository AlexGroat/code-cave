import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  }; 

  return (
    <nav className="flex-column">
      {Auth.loggedIn() ? (
        <>
        <span>Welcome to the cave, {Auth.getProfile().data.username}!</span>
        <button variant="primary" onClick={logout}>Logout</button>
        </>
      ) : (
        <>
        <Link className="btn btn-lg btn-info m-2" to="/login">
          Login
        </Link>
        <Link className="btn btn-lg btn-light m-2" to="/signup">
          Signup
        </Link>
      </>
      )}
    </nav>
  );
};

export default Navbar;