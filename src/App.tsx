import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/common/navbar";
import Home from "./components/home";
import { Navigate, Route, Routes } from "react-router-dom";
import About from './components/about';
import Crags from './components/crags';
import ClimbingClubs from './components/climbingClubs';
import GymsAndGear from './components/gymsAndGear';
import Ice from './components/ice';
import Links from './components/links';
import Weather from './components/weather';
import NotFound from "./components/notFound";

function App() {
  return (
    <div>
      <Navbar />
      <div className="content"></div>
      <div className="container mt-5">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/crags" element={<Crags />} />
          <Route path="/climbing_clubs" element={<ClimbingClubs />} />
          <Route path="/gyms&gear" element={<GymsAndGear />} />
          <Route path="/ice" element={<Ice />} />
          <Route path="/links" element={<Links />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/gyms&gear" element={<GymsAndGear />} />
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
