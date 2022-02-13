
import "./sidebar.css";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";


export default function Sidebar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
    <nav className="sidebar sidebar-collapse">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <Link className="sidebar-link" to="/">
            <li className="sidebar-list-item text-dark">Feed</li>
          </Link>
        
        {Auth.loggedIn() ? (
          <>
            <li className="logged-in-text">
               Welcome,{" "}
              {Auth.getProfile().data.username}!
            </li>
            <Link className="sidebar-link" to="/profile">
              <li className="sidebar-list-item-login text-dark">
                
                Profile
              </li>
            </Link>
            <button
              className="logout-button btn btn-md btn-primary"
              onClick={logout}
            >
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
        </ul>
      </div>
    </nav>
    </>
  );
}
