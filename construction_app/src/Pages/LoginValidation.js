function Validation(values) {
  let error = {};
  console.log(values.email);
  console.log(values.pass);

  if (values.email === "") {
    error.email = "Email must not be empty";
    console.log("in if1");
  } else {
    error.email = "";
  }
  if (values.pass === "") {
    error.pass = "Password must not be empty";
    console.log("in if2");
  } else {
    error.pass = "";
  }

  return error;
}

export default Validation;
