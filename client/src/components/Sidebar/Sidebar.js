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
        <ul className="sidebar-nav">
          <Link className="feed-link" to="/">
              <RssFeed className="feed-icon"/>
            <li className="feed-list-item">Feed</li>
          </Link>
        </ul>
      </div>
      {Auth.loggedIn() ? (
        <>
          <span>Hey there, {Auth.getProfile().data.username}!</span>
          <button className="btn btn-lg btn-light m-2" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link className="feed-link" to="/login">
            <li className="feed-list-item">Login</li>
          </Link>
          <Link className="feed-link" to="/signup">
            <li className="feed-list-item">Signup</li>
          </Link>
             
        </>
      )}
    </div>
  );
}
