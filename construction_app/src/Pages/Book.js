import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

//The book component is where the book page is created and front end work is handled for booking a project
function Book() {
  const [values, setValues] = useState({ quoteID: "", bookDate: "" });
  const [errors, setErrors] = useState({ quoteID: "", bookDate: "" });
  const today = new Date()
  var selectedDate = new Date(values.bookDate)
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
    if (values.quoteID === "") {
      tempErrors.quoteID = "Quote ID cannot be empty";
    }
    else if(!Number.isInteger(parseInt(values.quoteID))){
      tempErrors.quoteID = "Quote must be a number"
    }
    else {
      tempErrors.quoteID = "";
    }
    if (values.bookDate === "") {
      tempErrors.bookDate = "Start date cannot be empty";
    } 
    else if(selectedDate < today)
    {
      tempErrors.bookDate = "Date cannot be in the past"
      alert("Date cannot be in the past")
    }
    else {
      tempErrors.bookDate = "";
    }

    setErrors(tempErrors);


    var hasErrors = false;
    for (var key in tempErrors) {
      if (tempErrors[key] !== "") {
        hasErrors = true;
      }
    }
    if (hasErrors === false) {
      var validID = true
      var projectExists = false

      const checkQuote = async () => {
        const quote = await fetch("/checkQuote", {
          method: "post",
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...values,
          }),
        }).then((res) => res.json());
        if(Object.keys(quote.recordset).length===0)
        {
          validID = false
          alert('This QuoteID does not exist')
        }
      };

      const checkProject = async () => {
        const project = await fetch("/checkProject", {
          method: "post",
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...values,
          }),
        }).then((res) => res.json());
        if(Object.keys(project.recordset).length>0)
        {
          projectExists = true
          alert('This Project has already been scheduled')
        }
      };


      const createProject = async () => {
        await checkQuote()
        if(validID ){
          await checkProject()
          if(!projectExists){
            console.log('here')
            await fetch("/createProject", {
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
        }
      };
      createProject();
      navigate('/Account')
    }
  };
  return (
    <>
      <body className="bookBody">
        <div className="bookContainer">
          <h1> Schedule your Start date </h1>
          <form onSubmit={handleSubmit}>
            <div className="bookContent">
              <div className="bookElement">
                <label for="quote">Quote ID Number</label>
                <input
                  className="quoteID"
                  placeholder="Quote ID Number"
                  value={values.quoteID}
                  onChange={onChange}
                ></input>
                {errors.quoteID && <span>{errors.quoteID}</span>}
              </div>
              <div className="bookElement">
                <label for="bookDate">Start Date</label>
                <input
                  type="date"
                  className="bookDate"
                  value={values.bookDate}
                  onChange={onChange}
                ></input>
                {errors.bookDate && <span>{errors.bookDate}</span>}
              </div>
              <div className="bookButtonContainer">
                <button>Book</button>
              </div>
            </div>
          </form>
        </div>
      </body>
    </>
  );
}

export default Book;
