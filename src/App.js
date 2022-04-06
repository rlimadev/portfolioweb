import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Curriculum from "./components/Curriculum";
import Portfolio from "./components/Portfolio/Portfolio";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
