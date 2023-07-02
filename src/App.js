import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import MapPage from "./Components/MapPage";
import BarChar from "./Components/BarChart";
import PiChart from "./Components/PiChart";
import "leaflet/dist/leaflet.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route index path="/lineChart" element={<Home />} />
        <Route index path="/barChart" element={<BarChar />} />
        <Route index path="/piChart" element={<PiChart />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
