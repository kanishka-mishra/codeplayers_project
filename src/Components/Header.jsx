import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
        <h2 style={{ color: "black" }}>CRUD OPERATIONS BY KANISHKA MISHRA</h2>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <h3><li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="active"
              >
                <h2 style={{ color: "RED" }}>Data Entry Form</h2>
              </NavLink>
            </li></h3>
            <h3><li className="nav-item">
              <NavLink
                to="/ListPages"
                className="nav-link"
                activeClassName="active"
              >
                <h2 style={{ color: "BLUE" }}>Users Details</h2>
              </NavLink>
            </li></h3>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;