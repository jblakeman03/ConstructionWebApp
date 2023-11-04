function Schedule() {
  return (
    <>
      <body className="scheduleBody">
        <div className="scheduleContainer">
          <h1> Schedule Estimate </h1>
          <div className="scheduleContent">
            <div className="scheduleElement">
              <label for="first">First Name</label>
              <input className="first" placeholder="First Name "></input>
            </div>

            <div className="scheduleElement">
              <label for="last">Last Name</label>
              <input className="last" placeholder="Last Name"></input>
            </div>
            <div className="scheduleElement">
              <label for="email">Email</label>
              <input className="email" placeholder="Email"></input>
            </div>
            <div className="scheduleElement">
              <label for="type">Choose your Project Type </label>
              <select className="type">
                <option value="deck"> Deck</option>
                <option value="barn"> Barn</option>
                <option value="remodel"> Remodel</option>
                <option value="roof"> Roof</option>
              </select>
            </div>
            <div className="scheduleElement">
              <label for="scheduleDate">Date</label>
              <input type="date" className="scheduleDate"></input>
            </div>
            <div className="scheduleDescription">
              <input type="text" placeholder="Project Description"></input>
            </div>

            <div className="scheduleButtonContainer">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Schedule;
