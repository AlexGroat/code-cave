import "./sidebar.css";
import { RssFeed } from "@material-ui/icons";
import PersonIcon from "@material-ui/icons/Person";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import { Link } from "react-router-dom";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import CreateIcon from '@material-ui/icons/Create';

import Auth from "../../utils/auth";

export default function Sidebar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav className="sidebar sidebar-collapse">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <Link className="sidebar-link" to="/">
            <li className="sidebar-list-item"><RssFeed />Feed</li>
          </Link>
        
        {Auth.loggedIn() ? (
          <>
            <li className="logged-in-text">
              <EmojiPeopleIcon /> Welcome,{" "}
              {Auth.getProfile().data.username}!
            </li>
            <Link className="sidebar-link" to="/profile">
              <li className="sidebar-list-item-login">
                <PersonIcon />
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
              <li className="sidebar-list-item-login"><VpnKeyIcon />Login</li>
            </Link>
            <Link className="sidebar-link" to="/signup">
              <li className="sidebar-list-item-signup"><CreateIcon />Signup</li>
            </Link>
          </>
        )}
        </ul>
      </div>
    </nav>
  );
}
