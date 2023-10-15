import { Link } from "react-router-dom";

function BookButton() {
  return (
    <button type="button" className="BookButton">
      <Link to="/Book">Book Project </Link>
    </button>
  );
}

export default BookButton;
