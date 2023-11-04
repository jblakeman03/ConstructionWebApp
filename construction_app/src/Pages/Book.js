function Book() {
  return (
    <>
      <body className="bookBody">
        <div className="bookContainer">
          <h1> Schedule your Start date </h1>
          <div className="bookElement">
            <input className="quote" placeholder="Quote ID Number"></input>
          </div>
          <div className="bookButtonContainer">
            <button>Book</button>
          </div>
        </div>
      </body>
    </>
  );
}

export default Book;
