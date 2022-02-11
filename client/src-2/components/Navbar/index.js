import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const NavBar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

}


export default Navbar;
