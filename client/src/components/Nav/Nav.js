import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_USER } from "../../utils/queries"
import Auth from "../../utils/auth";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import "./nav.css";

const NavBar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const { username: currentUser } = useParams();

  const { loading, data } = useQuery(currentUser ? QUERY_USER : QUERY_ME, {
    variables: { username: currentUser },
  });

  const user = data?.me || data?.user || {};

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
         
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="title-text">
          <header className="nav-title">
              <h1 className="cc-title">Code Cave <BiIcons.BiCode/></h1>
              <p className="cc-text">The cave for all coders!</p>
          </header>
          </div>
        </div>
       
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
      
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {Auth.loggedIn() ? (
              <>
                <span>Welcome, {Auth.getProfile().data.username}! </span>
                <Link className="sidebar-link" to="/">
                  <span className="nav-text">
                    <AiIcons.AiFillHome />
                    Home
                  </span>
                </Link>
                <Link className="sidebar-link" to={`/profiles/${user.username}`}>
                  <span className="nav-text">
                    <BsIcons.BsFillPersonFill />
                    Profile
                  </span>
                </Link>
                <Link className="sidebar-link" to="/">
                  <span className="nav-text" onClick={logout}>
                    <BiIcons.BiLogOut />
                    Logout
                  </span>
                </Link>
              </>
            ) : (
              <>
                <Link className="sidebar-link" to="/">
                  <span className="nav-text">
                    <AiIcons.AiFillHome />
                    Home
                  </span>
                </Link>
                <Link className="sidebar-link" to="/login">
                  <span className="nav-text">
                    <BiIcons.BiLogIn />
                    Login
                  </span>
                </Link>
                <Link className="sidebar-link" to="/signup">
                  <span className="nav-text">
                    <BsIcons.BsFillArrowUpCircleFill />
                    Signup{" "}
                  </span>
                </Link>
              </>
            )}
          </ul>
          
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;