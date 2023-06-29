import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <b className="navbar-brand">THIRD EYE</b>
        <div className="d-flex">
          <Link to="/lineChart" className="mx-2">
            LINE CHART
          </Link>
          <Link to="/barChart" className="mx-2">
            BAR CHART
          </Link>
          <Link to="/piChart" className="mx-2">
            PI CHART
          </Link>
          <Link to="/map">MAP</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
