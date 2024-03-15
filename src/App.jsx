import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
