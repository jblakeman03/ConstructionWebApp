import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Schedule from "./Pages/Schedule";
import Book from "./Pages/Book";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar> </Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Schedule" element={<Schedule />}></Route>
          <Route path="/Book" element={<Book />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
