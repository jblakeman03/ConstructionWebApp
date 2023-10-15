import ClearButton from "../Components/ClearButton";
import Navbar from "../Components/Navbar";
import SignUpButton from "../Components/SignUpButton";
import SubmitButton from "../Components/SubmitButton";

function Login() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <h1> Login</h1>
        <ClearButton></ClearButton>
        <SubmitButton></SubmitButton>
        <SignUpButton></SignUpButton>
      </div>
    </>
  );
}

export default Login;
