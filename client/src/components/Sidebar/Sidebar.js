import "./sidebar.css";
import { RssFeed } from "@material-ui/icons";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

export default function Sidebar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <Link className="sidebar-link" to="/">
              <RssFeed className="sidebar-icon"/>
            <li className="sidebar-list-item">Feed</li>
          </Link>
        </ul>
            {Auth.loggedIn() ? (
        <>
          <li className="logged-in-text">Welcome to the cave, {Auth.getProfile().data.username}!</li>
          <button className="logout-button btn btn-md btn-primary" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link className="sidebar-link" to="/login">
            <li className="sidebar-list-item-login">Login</li>
          </Link>
          <Link className="sidebar-link" to="/signup">
            <li className="sidebar-list-item-signup">Signup</li>
          </Link>
             
        </>
      )}
    </div>
    </div>
  );
}
