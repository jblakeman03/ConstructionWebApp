import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [phone, setPhone] = useState("");
  const [street1, setStreet1] = useState("");
  const [street2, setStreet2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const handleSubmit = (e) => {
    e.preventDefautlt();
    console.log(email);
  };

  return (
    <>
      <body>
        <form onSubmit={handleSubmit} className="form">
          <div className="signup_container">
            <label for="first">First Name</label>
            <input
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              type="text"
              placeholder="First Name"
              className="first"
            ></input>
            <label for="last">Last Name</label>

            <input
              value={last}
              onChange={(e) => setLast(e.target.value)}
              type="text"
              placeholder="Last Name"
              className="last"
            ></input>
            <label for="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="email"
            ></input>
            <label for="phone">Phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="phone"
              placeholder="Phone"
              className="phone"
            ></input>
            <label for="pass">Password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Password"
              className="pass"
            ></input>

            <label for="verifyPass">Verify Password</label>
            <input
              type="password"
              placeholder="Password"
              className="verifyPass"
            ></input>

            <label for="street1">Street 1</label>
            <input
              value={street1}
              onChange={(e) => setStreet1(e.target.value)}
              type="text"
              placeholder="Street Address 1"
              className="street1"
            ></input>
            <label for="street2">Street 2</label>
            <input
              value={street2}
              onChange={(e) => setStreet2(e.target.value)}
              type="text"
              placeholder="Street 2"
              className="street2"
            ></input>

            <label for="city">City</label>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="City"
              className="city"
            ></input>
            <label for="state">State</label>
            <input
              value={state}
              onChange={(e) => setState(e.target.value)}
              type="text"
              placeholder="state"
              className="State"
            ></input>
            <label for="zip">Zipcode</label>
            <input
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              type="text"
              placeholder="Zipcode"
              className="zip"
            ></input>
            <div className="signupButtons">
              <button className="">Clear</button>
              <button className="">Submit </button>
            </div>
          </div>
        </form>
      </body>
    </>
  );
};

export default SignUp;
