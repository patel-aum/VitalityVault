import React from 'react';
import './navbar.css';
import Sidebar from './Sidebar';
function Navbar() {
  return (
    
    <nav className="navbar">
    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div className="navbar-left">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/doctorpanel" className="nav-link">Doctor Panel</a>
          </li>
          <li className="nav-item">
            <a href="/patientpanel" className="nav-link">Patient Panel</a>
          </li>
          <li className="nav-item">
            <a href="/monitoringpanel" className="nav-link">Monitoring Panel</a>
          </li>
        </ul>
      </div>
      <div className="navbar-center">
        <h1>VitalityVault</h1>
      </div>
      <div className="navbar-right">
        <button className="btn">Sign out</button>
      </div>
    </nav>
  );
}

export default Navbar;
