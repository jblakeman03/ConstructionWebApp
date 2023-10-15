import ClearButton from "../Components/ClearButton";
import Navbar from "../Components/Navbar";
import SubmitButton from "../Components/SubmitButton";

function SignUp() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <h1> SignUp</h1>
        <ClearButton></ClearButton>
        <SubmitButton></SubmitButton>
      </div>
    </>
  );
}

export default SignUp;
