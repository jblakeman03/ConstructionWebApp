import "./Schedule.css";

function Schedule() {
  return (
    <>
      <div className="mainContainer">
        <h1> Schedule</h1>
        <div className="contentContainer">
          <label for="type">Choose your Project Type </label>
          <select className="type">
            <option value="deck"> Deck</option>
            <option value="barn"> Barn</option>
            <option value="remodel"> Remodel</option>
            <option value="roof"> Roof</option>
          </select>
          <input type="text" placeholder="Project Description"></input>

          <div className="buttonContainer">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Schedule;
