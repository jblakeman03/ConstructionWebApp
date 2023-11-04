import React, { useState } from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <body className="loginBody">
        <div className="loginContainer">
          <h1> Login </h1>

          <div className="loginElement">
            <input placeholder="Email" className="email"></input>
          </div>

          <div className="loginElement">
            <input placeholder="Password" className="pass"></input>
          </div>
          <div className="loginButtonContainer">
            <button>Clear</button>
            <button>Submit </button>
          </div>
          <div className="loginAccountButtonContainer">
            <Link to="/SignUp">
              <button>Dont have an account? Sign up!</button>
            </Link>
          </div>
        </div>
      </body>
    </>
  );
}
export default Login;
