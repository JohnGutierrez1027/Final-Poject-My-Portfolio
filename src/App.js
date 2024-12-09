import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'; // Importing the CSS file
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Biography from "./pages/Biography";
import Interests from "./pages/Interests";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/interests" element={<Interests  />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
