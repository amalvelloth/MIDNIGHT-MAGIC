import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Home/>
        <About/>
        <Contact/>
      </Router>
    </div>
  );
};

export default App;
