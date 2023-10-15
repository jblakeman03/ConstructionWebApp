import { Link } from "react-router-dom";
import "./Button.css";

function ScheduleButton() {
  return (
    <button type="button" className="ScheduleButton">
      <Link to="/Schedule" className="link">
        Schedule Quote
      </Link>
    </button>
  );
}

export default ScheduleButton;
