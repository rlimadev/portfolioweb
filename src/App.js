import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from "./components/Contact";
import Curriculum from "./components/Curriculum";
import Portfolio from "./components/Portfolio/Portfolio";
import BeloteGame from "./components/Projects/BeloteGame/BeloteGame";
import Brastemp from "./components/Projects/Brastemp/Brastemp";
import Microlins from "./components/Projects/Microlins";
import HoleGame from "./components/Projects/HoleGame";
import MedSoft from "./components/Projects/MedSoft";
import SwordGame from "./components/Projects/SwordGame";
import WebPhoto from "./components/Projects/WebPhoto";
import HomePage from "./pages/HomePage";
import Global from "./style/global";

function App() {
  return (
    <BrowserRouter>
      <Global />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="portfolio/brastemp" element={<Brastemp />} />
        <Route path="portfolio/belote" element={<BeloteGame />} />
        <Route path="portfolio/buraco" element={<HoleGame />} />
        <Route path="portfolio/medsoft" element={<MedSoft />} />
        <Route path="portfolio/microlins" element={<Microlins />} />
        <Route path="portfolio/sword" element={<SwordGame />} />
        <Route path="portfolio/photolivro" element={<WebPhoto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
