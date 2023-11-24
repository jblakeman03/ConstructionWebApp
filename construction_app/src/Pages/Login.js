import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [values, setValues] = useState({ email: "", pass: "" });
  const [errors, setErrors] = useState({ email: "", pass: "" });

  const onChange = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.className]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let tempErrors = {};
    if (values.email === "") {
      tempErrors.email = "Email cannot be empty";
    } else {
      tempErrors.email = "";
    }
    if (values.pass === "") {
      tempErrors.pass = "Password cannot be empty";
    } else {
      tempErrors.pass = "";
    }

    setErrors(tempErrors);

    var hasErrors = false;
    for (var key in errors) {
      if (errors[key] != "") {
        hasErrors = true;
        console.log(errors[key]);
      }
    }
    console.log("1. ", hasErrors);
    const customer = values;

    if (hasErrors === false) {
      console.log("No Errors. In if");

      const getLogin = async () => {
        const login = await fetch("/getLogin", {
          method: "post",
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: values.email,
          }),
        }).then((res) => res.json());
      };
      getLogin();
    }
  };

  const handleReset = () => {
    setValues({ email: "", pass: "" });
    setErrors({ email: "", pass: "" });
  };

  return (
    <>
      <body className="loginBody">
        <div className="loginContainer">
          <form onSubmit={handleSubmit}>
            <h1> Login </h1>

            <div className="loginElement">
              <input
                type="email"
                placeholder="Email"
                className="email"
                onChange={onChange}
                value={values.email}
              ></input>
              {errors.email && <span>{errors.email}</span>}
            </div>

            <div className="loginElement">
              <input
                type="password"
                placeholder="Password"
                className="pass"
                onChange={onChange}
                value={values.pass}
              ></input>
              {errors.pass && <span>{errors.pass}</span>}
            </div>
            <div className="loginButtonContainer">
              <button type="reset" onClick={handleReset}>
                Clear
              </button>
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
