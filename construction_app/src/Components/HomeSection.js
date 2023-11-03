import React from "react";
import { Link } from "react-router-dom";

function HomeSection() {
  return (
    <>
      <body className="homeBody">
        <div className="HomeSection-container">
          <h1>Get your Project Started</h1>
          <p> Schedule an estimate or book a project</p>
          <div className="HomeSection-btns">
            <Link to="/SignUp">
              <button className="homeButtons">Sign Up</button>
            </Link>
            <Link to="/Schedule">
              <button className="homeButtons">Schedule Quote</button>
            </Link>
            <Link to="/Book">
              <button className="homeButtons">Book Project</button>
            </Link>
          </div>
        </div>
      </body>
    </>
  );
}

export default HomeSection;
