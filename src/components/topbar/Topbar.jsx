import React from 'react'
import "./topbar.css"
import {Language, NotificationsNone, Settings} from "@mui/icons-material";

const Topbar = () => {
    return (
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">OhJaz Admin</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <img
              src="../images/logo.jpg"
              alt="Ohjaz Logo"
              className="topAvatar"
            />
          </div>
        </div>
      </div>
    );
}

export default Topbar
