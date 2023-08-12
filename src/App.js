import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import MapPage from "./Components/MapPage";
import BarChar from "./Components/BarChart";
import PiChart from "./Components/PiChart";
import "leaflet/dist/leaflet.css";
import Login from "./Components/Login";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route index path="/login" element={<Login />} />
        <Route index path="/lineChart" element={<Home />} />
        <Route index path="/barChart" element={<BarChar />} />
        <Route index path="/piChart" element={<PiChart />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
