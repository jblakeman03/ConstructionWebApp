import ClearButton from "../Components/ClearButton";
import Navbar from "../Components/Navbar";
import SignUpButton from "../Components/SignUpButton";
import SubmitButton from "../Components/SubmitButton";
import "./Login.css";

function Login() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="container">
          <h1> Login </h1>
          <input type="text" placeholder="Username"></input>
          <input type="text" placeholder="Password"></input>
          <ClearButton></ClearButton>
          <SubmitButton></SubmitButton>
          <SignUpButton></SignUpButton>
        </div>
      </div>
    </>
  );
}

export default Login;
