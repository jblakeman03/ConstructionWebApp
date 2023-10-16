import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar> </Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
