import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Schedule() {
  const [values, setValues] = useState({
    first: "",
    last: "",
    email: "",
    scheduleDate: "",
    projectType: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    first: "",
    last: "",
    email: "",
    scheduleDate: "",
    projectType: "",
  });

  const navigate = useNavigate()

  const today = new Date()
  var selectedDate = new Date(values.scheduleDate)



  const handleChange = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.className]: event.target.value,
    }));
    console.log(event.target)
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
    if (values.projectType === "Select One")
      error.projectType = "Project Type cannot be empty";
    else error.projectType = "";
    if (values.scheduleDate === "") error.scheduleDate = "Date cannot be empty";
    else if(selectedDate < today)
    {
      error.scheduleDate = "Date cannot be in the past"
      alert("Date cannot be in the past")
    }
    else error.scheduleDate = "";

    

    setErrors(error);

    var hasErrors = false;

    for (var key in error) {
      if (error[key] != "") {
        hasErrors = true;
      }
    }
    var emailExists = true
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
      if(Object.keys(cust).length===0)
      {
        emailExists = false
        alert('This email is not in our system. Please enter the email you signed up with or create a new account. ')
      }
    }


      const scheduleQuote = async () => {
        await checkEmailExistance(values.email)
        if(emailExists){
          await fetch("/scheduleQuote", {
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
      scheduleQuote();
      navigate('/Account')
    }
  };

  return (
    <>
      <body className="scheduleBody">
        <div className="scheduleContainer">
          <h1> Schedule Estimate </h1>
          <form onSubmit={handleSubmit}>
            <div className="scheduleContent">
              <div className="scheduleElement">
                <label for="first">First Name</label>
                <input
                  className="first"
                  placeholder="First Name "
                  value={values.first}
                  onChange={handleChange}
                ></input>
                {errors.first && <span>{errors.first}</span>}
              </div>

              <div className="scheduleElement">
                <label for="last">Last Name</label>
                <input
                  className="last"
                  placeholder="Last Name"
                  value={values.last}
                  onChange={handleChange}
                ></input>
                {errors.last && <span>{errors.last}</span>}
              </div>
              <div className="scheduleElement">
                <label for="email">Email</label>
                <input
                  className="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                ></input>
                {errors.email && <span>{errors.email}</span>}
              </div>
              <div className="scheduleElement">
                <label for="type" className="projectType">
                  Choose your Project Type{" "}
                </label>
                <select className="type" onChange={handleChange}>
                  <option value="Select one">Select One</option>
                  <option value="deck"> Deck</option>
                  <option value="barn"> Barn</option>
                  <option value="remodel"> Remodel</option>
                  <option value="roof"> Roof</option>
                </select>
                {errors.projectType && <span>{errors.projectType}</span>}
              </div>
              <div className="scheduleElement">
                <label for="scheduleDate">Date</label>
                <input
                  type="date"
                  className="scheduleDate"
                  value={values.date}
                  onChange={handleChange}
                ></input>
                {errors.scheduleDate && <span>{errors.scheduleDate}</span>}
              </div>
              <div className="scheduleDescription">
                <input
                  type="text"
                  className = 'description'
                  placeholder="Project Description"
                  value={values.description}
                  onChange={handleChange}
                ></input>
              </div>

              <div className="scheduleButtonContainer">
                <button>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </body>
    </>
  );
}

export default Schedule;
