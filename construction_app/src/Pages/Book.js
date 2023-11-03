function Book() {
  return (
    <>
      <div className="bookContainer">
        <h1> Book</h1>
        <div className="BookContent">
          <label for="quote">Quote ID Number </label>
          <input className="quote" placeholder="Quote ID Number"></input>
          <div className="buttonContainer">
            <button>Book</button>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Book;
