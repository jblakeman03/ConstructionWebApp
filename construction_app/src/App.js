import React, {useState, useEffect} from "react";
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
import Account from './Pages/Account';




function App() {
  const [loginStatus, setLoginStatus] = useState(false)
  console.log('in napp1', localStorage.getItem('email'))
  console.log('in app2', localStorage.getItem('loginStatus'))
  useEffect( ()=> {
  if(localStorage.getItem('loginStatus')==='true')
    setLoginStatus(true)
  else
    setLoginStatus(false)
  }, [])
  console.log('login in app', loginStatus)
  return (
    <>
      <BrowserRouter>
        <Navbar parentToChild={loginStatus}> </Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Home" element={<Home parentToChild={loginStatus}/>}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          {loginStatus? <Route path="/Schedule" element={<Schedule />}></Route>: null}
          {loginStatus? <Route path="/Book" element={<Book />}></Route>: null} 
          {loginStatus? <Route path="/Account" element={<Account/>}></Route>: null} 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
