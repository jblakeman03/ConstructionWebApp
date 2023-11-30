import React from "react";
import { Link } from "react-router-dom";

function HomeSection(status) {
  const isLoggedIn = status.parentToChild
  console.log('in home section', isLoggedIn)
  return (
    <>
      <div className="homeBody">
        <div className="HomeSection-container">
          <h1>Get your Project Started</h1>
          <p> Schedule an estimate or book a project</p>
          <div className="HomeSection-btns">
            {!isLoggedIn? <Link to="/SignUp">
              <button className="homeButtons">Sign Up</button>
            </Link>:null}
            {isLoggedIn?
            <Link to="/Schedule">
              <button className="homeButtons">Schedule Quote</button>
            </Link>: null}
            {isLoggedIn? 
            <Link to="/Book">
              <button className="homeButtons">Book Project</button>
            </Link>: null}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSection;
