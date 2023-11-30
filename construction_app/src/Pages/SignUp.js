import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

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
const [isSignedUp, setIsSignedUp] = useState(false)
const navigate = useNavigate()

  const handleChange = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.className]: event.target.value,
    }));
  };


  const handleSubmit = (event) =>   {
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
    if (values.street === "") error.street1 = "Street cannot be empty";
    else error.street = "";
    if (values.city === "") error.city = "City cannot be empty";
    else error.city = "";
    if (values.state === "") 
    {
      error.state = "State cannot be emtpty";
    }
    else if(values.state.length>2)
    {
      error.state = 'State must be abbreaviated'
    }
    else error.state = "";
    if (values.zip.length===0) error.zip = "Zipcode cannot be empty";
    else error.zip = "";
    if (values.pass !== values.verifyPass)
      error.verifyPass = "Passwords do not match";
    else if (values.pass === values.verifyPass && values.pass !== "")
      error.verifyPass = "";


 
    setErrors(error);
    var hasErrors = false;
    for (var key in error) {
      if (error[key] !== "") {
        hasErrors = true;
      }
    }

    var inUse = false
    console.log('should be truwe here', hasErrors)
    if (hasErrors === false) {
      const checkEmailExistance = async() => {
        const cust = await fetch('/checkEmailExistance', {
          method: 'post', 
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...values,
          }),
      }).then((res)=>res.json());
      if(Object.keys(cust).length>0)
      {
        inUse = true
        alert('This Email is already in use. Please Login')
      }
    }

      const createCustomer = async () => {
        await checkEmailExistance()
        if(inUse===false){
          await setIsSignedUp(true)
          await fetch("/createCustomer", {
            method: "post",
            headers: {
              "content-type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              ...values,
            }),
          }).then((res) => res.json());
      }
      };
      createCustomer()
      if(!hasErrors && !inUse)
        navigate('/Login')
      
    
    }


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
                placeholder="State"
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
