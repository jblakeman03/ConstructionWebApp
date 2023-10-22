import "./Book.css";

function Book() {
  return (
    <>
      <div className="mainContainer">
        <h1> Book</h1>
        <div className="contentContainer">
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
