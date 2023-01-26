import React from "react";
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';

const Sidebar = () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/doctorpanel">
      Doctor Panel
      </a>
      <a className="menu-item" href="/patientpanel">
      Patient panel
      </a>
      <a className="menu-item" href="/monitoringpanel">
      Monitoring panel
      </a>
    </Menu>
  );
};

export default Sidebar;