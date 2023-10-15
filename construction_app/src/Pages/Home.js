import "./Home.css";
import Navbar from "../Components/Navbar";
import ScheduleButton from "../Components/ScheduleButton";
import BookButton from "../Components/BookButton";

function Home() {
  return (
    <>
      <body>
        <div className="banner">
          <Navbar></Navbar>
          <div className="content">
            <h1> Got a project you need done?</h1>
            <p>Schedule an estimate or book a project you already had quoted</p>
            <div>
              <ScheduleButton></ScheduleButton>
              <BookButton></BookButton>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Home;
