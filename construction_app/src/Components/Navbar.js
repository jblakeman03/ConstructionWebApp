import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
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
          <Link to="/About">About Us</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
        <li>
          <Link to="/Contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/Login">Log In </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
