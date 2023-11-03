import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefautlt();
    console.log(email);
  };

  return (
    <>
      <div>
        <div className="container">
          <h1> Login </h1>
          <form onSubmit={handleSubmit}>
            <label for="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="email"
            ></input>
            <label for="pass">Password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Password"
              className="pass"
            ></input>
            <button>Clear</button>
            <button>Submit </button>
          </form>
          <Link to="/SignUp">
            <button>Dont have an account? Sign up!</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
