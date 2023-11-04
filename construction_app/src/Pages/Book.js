function Book() {
  return (
    <>
      <body className="bookBody">
        <div className="bookContainer">
          <h1> Schedule your Start date </h1>
          <div className="bookContent">
            <div className="bookElement">
              <label for="quote">Quote ID Number</label>
              <input className="quote" placeholder="Quote ID Number"></input>
            </div>
            <div className="bookElement">
              <label for="bookDate">Start Date</label>
              <input type="date" className="bookDate"></input>
            </div>
            <div className="bookButtonContainer">
              <button>Book</button>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Book;
