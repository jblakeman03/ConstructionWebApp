import { Link } from "react-router-dom";
import "./Button.css";

function ScheduleButton() {
  return (
    <button type="button" className="HomeButtons">
      <Link to="/Schedule" className="link">
        Schedule Quote
      </Link>
    </button>
  );
}

export default ScheduleButton;
