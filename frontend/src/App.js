import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login.js";

import Home from "./Pages/Home.js";
import Navbar from "./components/Topbar/Topbar";
import Contact from "./Pages/Contact/Contact";
import Signup from './Pages/Signup/Signup';

function App() {
  return <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>


  </div>;
}

export default App;
