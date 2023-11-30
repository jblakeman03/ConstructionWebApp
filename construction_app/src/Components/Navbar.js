import { Link } from "react-router-dom";
import React, {useState} from 'react';

function Navbar(status) {

  const loggedIn = status.parentToChild
  console.log('in nav:', loggedIn)

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Blakeman Brothers Construction
      </Link>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
        <li>
          <Link to="/Contact">Contact Us</Link>
        </li>
       {!loggedIn? <li>
          <Link to="/Login">Log In </Link>
        </li>: null} 
        {loggedIn? <li> <Link to="/Account">Account </Link> </li> : null}
      </ul>
    </nav>
  );
}

export default Navbar;
