import Navbar from "./Components/Navbar";
import Services from "./Pages/Services";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";

function App() {
  let Component;
  let location = window.location.pathname;
  console.log(location);
  if (location == "/") {
    Component = Home;
    console.log("1");
  } else if (location == "/Home") {
    Component = Home;
    console.log("2");
  } else if (location == "/About") {
    Component = About;
    console.log("3");
  } else if (location == "/Services") {
    Component = Services;
    console.log("4");
  } else if (location == "/Contact") {
    Component = Contact;
    console.log("5");
  } else if (location == "/Login") {
    Component = Login;
    console.log("6");
  }
  console.log(Component);
  return (
    <>
      <Navbar></Navbar>
      <Component></Component>
    </>
  );
}

export default App;
