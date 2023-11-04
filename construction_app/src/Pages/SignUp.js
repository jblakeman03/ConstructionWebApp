import React, { useState } from "react";
import Validation from "./SignUpValidation";

function SignUp() {
  const [values, setValues] = useState({
    first: "",
    last: "",
    email: "",
    pass: "",
    verifyPass: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zip: "",
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
  };

  return (
    <>
      <body>
        <form onSubmit={handleSubmit} className="form" action="">
          <div className="signup_container">
            <label for="first">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="first"
            ></input>
            {errors.first && <span>{errors.first}</span>}
            <label for="last">Last Name</label>

            <input type="text" placeholder="Last Name" className="last"></input>
            {errors.last && <span>{errors.last}</span>}
            <label for="email">Email</label>
            <input type="email" placeholder="Email" className="email"></input>
            {errors.email && <span>{errors.email}</span>}

            <label for="pass">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="pass"
            ></input>
            {errors.pass && <span>{errors.pass}</span>}

            <label for="verifyPass">Verify Password</label>
            <input
              type="password"
              placeholder="Password"
              className="verifyPass"
            ></input>
            {errors.verifyPass && <span>{errors.verifyPass}</span>}

            <label for="street1">Street 1</label>
            <input
              type="text"
              placeholder="Street Address 1"
              className="street1"
            ></input>
            {errors.street1 && <span>{errors.street1}</span>}
            <label for="street2">Street 2</label>
            <input
              type="text"
              placeholder="Street 2"
              className="street2"
            ></input>

            <label for="city">City</label>
            <input type="text" placeholder="City" className="city"></input>
            {errors.city && <span>{errors.city}</span>}
            <label for="state">State</label>
            <input type="text" placeholder="state" className="state"></input>
            {errors.state && <span>{errors.state}</span>}
            <label for="zip">Zipcode</label>
            <input type="text" placeholder="Zipcode" className="zip"></input>
            {errors.zip && <span>{errors.zip}</span>}
            <div className="signupButtons">
              <button type="reset" onClick={handleClear}>
                Clear
              </button>
              <button type="submit">Submit </button>
            </div>
          </div>
        </form>
      </body>
    </>
  );
}

export default SignUp;
