import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./LoginValidation";

function Login() {
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  const handleClear = (event) => {
    event.preventDefault();
    setErrors({});
    var element = document.getElementByID("form");
    element.reset();
  };

  return (
    <>
      <body className="loginBody">
        <div className="loginContainer">
          <form action="" onSubmit={handleSubmit} id="form">
            <h1> Login </h1>

            <div className="loginElement">
              <input
                type="email"
                placeholder="Email"
                className="email"
                onChange={handleInput}
              ></input>
              {errors.email && <span>{errors.email}</span>}
            </div>

            <div className="loginElement">
              <input
                type="password"
                placeholder="Password"
                className="pass"
                onChange={handleInput}
              ></input>
              {errors.pass && <span>{errors.pass}</span>}
            </div>
            <div className="loginButtonContainer">
              <button onClick={handleClear}>Clear</button>
              <button type="submit">Submit </button>
            </div>
            <div className="loginAccountButtonContainer">
              <Link to="/SignUp">
                <button>Dont have an account? Sign up!</button>
              </Link>
            </div>
          </form>
        </div>
      </body>
    </>
  );
}
export default Login;
