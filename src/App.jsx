import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>

          
          <Navbar />
          <Contact />
    </div>
  );
};

export default App;
