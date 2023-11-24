import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [values, setValues] = useState({
    first: "",
    last: "",
    email: "",
    pass: "",
    verifyPass: "",
    street: "",
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
    street: "",
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
    if (values.street === "") error.street1 = "Street1 cannot be empty";
    else error.street = "";
    if (values.city === "") error.city = "City cannot be empty";
    else error.city = "";
    if (values.state === "") error.state = "State cannot be emtpty";
    else error.state = "";
    if (values.zip === 0) error.zip = "Zipcode cannot be empty";
    else error.zip = "";
    if (values.pass !== values.verifyPass)
      error.verifyPass = "Passwords do not match";
    else if (values.pass === values.verifyPass && values.pass !== "")
      error.verifyPass = "";

    setErrors(error);
    var hasErrors = false;
    for (var key in error) {
      if (errors[key] != "") {
        hasErrors = true;
        console.log(errors[key]);
      }
    }
    console.log("1. ", hasErrors);
    const customer = values;

    if (hasErrors === false) {
      console.log("No Errors. In if");

      const createCustomer = async () => {
        const newCust = await fetch("/createCustomer", {
          method: "post",
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...values,
          }),
        }).then((res) => res.json());
        console.log(newCust);
      };
      console.log(values);
      createCustomer();
    }

    const testing = async () => {
      const newCust = await fetch("/test", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: "cole",
        }),
      }).then((res) => res.json());
      console.log(newCust);
    };
    const data = { name: "cole" };
    testing();
  };

  const handleClear = (event) => {
    event.preventDefault();
    setErrors({
      first: "",
      last: "",
      email: "",
      pass: "",
      verifyPass: "",
      street: "",
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
      street: "",
      city: "",
      state: "",
      zip: "",
    });
  };

  // const getDate = async (url) => {
  //   const data = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //       Accept: "application/json",
  //     },
  //   }).then((res) => res.json());
  //   console.log(data);
  // };

  // getDate("/api");
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
            {errors.first && <span>{errors.first}</span>}
            <label for="last">Last Name</label>
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
            <label for="street">Street</label>
            <input
              type="text"
              placeholder="Street Address"
              className="street"
              value={values.street}
              onChange={handleChange}
            ></input>
            {errors.street1 && <span>{errors.street1}</span>}
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
