import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">Navbar</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
