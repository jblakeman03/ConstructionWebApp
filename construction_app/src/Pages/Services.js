import "./Services.css";
function Services() {
  return (
    <>
      <div className="mainContainer">
        <h1> What do we do </h1>
        <div className="row">
          <div className="column">
            <img src="/Images/deck1.JPG" width="400" height="350"></img>
            <h2> Multi-story Decks</h2>
            <p>
              {" "}
              Whether you need a small extension to an existing deck or a brand
              new multi story deck with a roof, we can meet all your decking
              needs.
            </p>
          </div>
          <div className="column">
            <img src="/Images/shed.JPG" width="400" height="350"></img>
            <h2>Barns and Sheds</h2>
            <p>
              {" "}
              Need a new pole barn or just an existing shed attached to the
              side? We can take care of that too!
            </p>
          </div>
          <div className="column">
            <img src="/Images/whiteFence.JPG" width="400" height="350"></img>
            <h2> Custom Fences</h2>
            <p>
              {" "}
              If you need a small privacy fence, large backyard fence for your
              pets, or woven wire livestock fence, we have you covered! We build
              most all styles of fencing to accomplish all your fencing goals.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
