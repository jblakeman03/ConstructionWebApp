import "./App.css";
import Navbar from "./Components/Navbar";
import Services from "./Pages/Services";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  let Component;
  let location = window.location.pathname;
  console.log(location);
  if (location == "/") {
    Component = App;
    console.log("1");
  } else if (location == "/Home") {
    Component = Home;
    console.log("2");
  } else if ((location = "/Services")) {
    Component = Services;
    console.log("3");
  } else if ((location = "/About")) {
    Component = About;
    console.log("4");
  }

  return (
    <>
      <Navbar>
        <Component></Component>
      </Navbar>
    </>
  );
}

export default App;
