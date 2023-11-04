function Validation(values) {
  let error = {};

  if (values.first === "") {
    error.first = "First name cannot be empty";
  }
  if (values.last === "") {
    error.last = "Last name cannot be empty";
  }
  if (values.email === "") {
    error.email = "email name cannot be empty";
  }
  if (values.pass === "") {
    error.pass = "Password cannot be empty";
  }
  if (values.verifyPass === "") {
    error.verifyPass = "Verify Password cannot be empty";
  }
  if (values.street1 === "") {
    error.street1 = "Street1 cannot be empty";
  }
  if (values.city === "") {
    error.city = "City cannot be empty";
  }
  if (values.state === "") {
    error.state = "State cannot be emtpty";
  }
  if (values.zip === "") {
    error.zip = "Zipcode cannot be empty";
  }
  if (values.pass != values.verifyPass) {
    error.verifyPass = "Passwords do not match";
  }

  return error;
}

export default Validation;
