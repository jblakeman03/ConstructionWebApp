function Schedule() {
  return (
    <>
      <body className="scheduleBody">
        <div className="scheduleContainer">
          <h1> Schedule</h1>
          <div className="scheduleContent">
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
      </body>
    </>
  );
}

export default Schedule;

