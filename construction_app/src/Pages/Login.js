import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



//The login component handles the login page and all the front end work for validating login activities
function Login() {
  const storedLoginStatus = () => localStorage.getItem('isLoggedIn') || false
  const [values, setValues] = useState({ email: "", pass: "" });
  const [errors, setErrors] = useState({ email: "", pass: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

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


    if (hasErrors === false) {

      var emailExists = true

      const checkEmail = async () => {
        const email = await fetch("/checkEmailExistance", {
          method: "post",
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...values
          }),
        }).then((res) => res.json());
        if(Object.keys(email).length===0)
        {
          emailExists = false 
          alert('This Email does not exist in our system. Please sign up')
        }
      };


      const getLogin = async () => {
        await checkEmail()
        if(emailExists){
          console.log('in the get login stage')
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
          if(values.pass===login[0].password)
          {
            const setLogins = async () => {
              await localStorage.setItem('email', values.email)
              await localStorage.setItem('loginStatus', true)
              navigate('/Home')
              window.location.reload(false)
              
             
            }
            setLogins()
          }
          else {
            alert('Password is not correct')
          }
      }
      };
      getLogin();
    }
  };
  const handleReset = () => {
    setValues({ email: "", pass: "" });
    setErrors({ email: "", pass: "" });
  };

  if(!isLoggedIn){
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
else {
  
}

}

export default Login;
