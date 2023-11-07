import React, { useState } from "react";

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
  const [errors, setErrors] = useState({
    first: "",
    last: "",
    email: "",
    pass: "",
    verifyPass: "",
    street1: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.className]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let error = {};
    if (values.first === "") error.first = "First name cannot be empty";
    else error.first = "";
    if (values.last === "") error.last = "Last name cannot be empty";
    else error.last = "";
    if (values.email === "") error.email = "email name cannot be empty";
    else error.email = "";
    if (values.pass === "") error.pass = "Password cannot be empty";
    else error.pass = "";
    if (values.verifyPass === "")
      error.verifyPass = "Verify Password cannot be empty";
    else error.verifyPass = "";
    if (values.street1 === "") error.street1 = "Street1 cannot be empty";
    else error.street1 = "";
    if (values.city === "") error.city = "City cannot be empty";
    else error.city = "";
    if (values.state === "") error.state = "State cannot be emtpty";
    else error.state = "";
    if (values.zip === "") error.zip = "Zipcode cannot be empty";
    else error.zip = "";
    if (values.pass !== values.verifyPass)
      error.verifyPass = "Passwords do not match";

    setErrors(error);
  };

  const handleClear = (event) => {
    event.preventDefault();
    setErrors({
      first: "",
      last: "",
      email: "",
      pass: "",
      verifyPass: "",
      street1: "",
      city: "",
      state: "",
      zip: "",
    });
    setValues({
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
  };

  return (
    <>
      <body>
        <form className="form" onSubmit={handleSubmit}>
          <div className="signup_container">
            <label for="first">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="first"
              value={values.first}
              onChange={handleChange}
            ></input>
            first <label for="last">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="last"
              value={values.last}
              onChange={handleChange}
            ></input>
            {errors.last && <span>{errors.last}</span>}
            <label for="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="email"
              value={values.email}
              onChange={handleChange}
            ></input>
            {errors.email && <span>{errors.email}</span>}
            <label for="pass">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="pass"
              value={values.pass}
              onChange={handleChange}
            ></input>
            {errors.pass && <span>{errors.pass}</span>}
            <label for="verifyPass">Verify Password</label>
            <input
              type="password"
              placeholder="Password"
              className="verifyPass"
              value={values.verifyPass}
              onChange={handleChange}
            ></input>
            {errors.verifyPass && <span>{errors.verifyPass}</span>}
            <label for="street1">Street 1</label>
            <input
              type="text"
              placeholder="Street Address 1"
              className="street1"
              value={values.street1}
              onChange={handleChange}
            ></input>
            {errors.street1 && <span>{errors.street1}</span>}
            <label for="street2">Street 2</label>
            <input
              type="text"
              placeholder="Street 2"
              className="street2"
              value={values.street2}
              onChange={handleChange}
            ></input>
            <label for="city">City</label>
            <input
              type="text"
              placeholder="City"
              className="city"
              value={values.city}
              onChange={handleChange}
            ></input>
            {errors.city && <span>{errors.city}</span>}
            <label for="state">State</label>
            <input
              type="text"
              placeholder="state"
              className="state"
              values={values.state}
              onChange={handleChange}
            ></input>
            {errors.state && <span>{errors.state}</span>}
            <label for="zip">Zipcode</label>
            <input
              type="text"
              placeholder="Zipcode"
              className="zip"
              onChange={handleChange}
              value={values.zip}
            ></input>
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
