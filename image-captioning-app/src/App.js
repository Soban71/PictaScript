// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
