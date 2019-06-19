import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            MediCenter
          </a>
          <ul className="navbar-nav ml-auto">
            <Link to="/" className="nav-link">
              <li className="nav-item active">Available Doctors</li>
            </Link>
            <Link to="/appointment-form" className="nav-link">
              <li className="nav-item">Appointment Form</li>
            </Link>
            <Link to="/history" className="nav-link">
              <li className="nav-item">History</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
