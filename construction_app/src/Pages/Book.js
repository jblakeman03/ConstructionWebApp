import React, { useState } from "react";

function Book() {
  const [values, setValues] = useState({ quoteID: "", bookDate: "" });
  const [errors, setErrors] = useState({ quoteID: "", bookDate: "" });

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
    } else {
      tempErrors.quoteID = "";
    }
    if (values.bookDate === "") {
      tempErrors.bookDate = "Start date cannot be empty";
    } else {
      tempErrors.bookDate = "";
    }

    setErrors(tempErrors);
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
                  value={values.quoteID}
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
