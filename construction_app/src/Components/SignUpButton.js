import { Link } from "react-router-dom";

function SignUpButton() {
  return (
    <button type="button" className="SignUpButton">
      <Link to="/SignUp">Sign Up</Link>
    </button>
  );
}

export default SignUpButton;
