import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary">
      <div className="container">
        <div>
          <Link className="text-dark" to="/">
            <h1 className="header m-0">Code Cave</h1>
          </Link>
          <p className="code-cave-subtext">The cave for all coders!</p>
        </div>
      </div>
    </header>
  );
};

export default Header;