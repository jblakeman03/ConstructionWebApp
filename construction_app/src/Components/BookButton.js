import { Link } from "react-router-dom";

function BookButton() {
  return (
    <button type="button" className="HomeButtons">
      <Link to="/Book">Book Project </Link>
    </button>
  );
}

export default BookButton;
