import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

import Auth from "../../utils/auth";

const NavBar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav className="flex-column">
      <div>
        <ul>
          <li className="nav.item">
            <Link className="text-dark" to="/">
              <p>Home</p>
            </Link>
          </li>

          {Auth.loggedIn() ? (
            <>
              <span>
                Welcome to the Cave, {Auth.getProfile().data.username}!
              </span>
              <li className="nav.item">
                <Link className="text-dark" to="/profile">
                  <p>Profile</p>
                </Link>
              </li>
              <button className="btn btn-dark" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <li className="nav.item">
                <Link className="text-dark" to="/login">
                  <p>Login</p>
                </Link>
              </li>
              <li className="nav.item">
                <Link className="text-dark" to="/signup">
                  <p>Signup</p>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
