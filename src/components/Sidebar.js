import React from "react";
import "../styles/Sidebar.css";
import UserSection from "./UserSection";
import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AlbumIcon from "@material-ui/icons/Album";
import PersonIcon from "@material-ui/icons/Person";

function Sidebar() {
  
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <UserSection />
      </div>
      <div className="sidebar-container">
        <div className="sidebar-links-container">
          <HomeIcon className="sidebar-links-icon" />
          <h3 className="sidebar-links-h3">Home</h3>
        </div>
        <div className="sidebar-links-container">
          <DashboardIcon className="sidebar-links-icon" />
          <h3 className="sidebar-links-h3">Browse</h3>
        </div>

        <div className="sidebar-links-container">
          <AlbumIcon className="sidebar-links-icon" />
          <h3 className="sidebar-links-h3">Ablum</h3>
        </div>
        <div className="sidebar-links-container">
          <PersonIcon className="sidebar-links-icon" />
          <h3 className="sidebar-links-h3">Artist</h3>
        </div>
        <div className="sidebar-links-container">
          <PersonIcon className="sidebar-links-icon" />
          <h3 className="sidebar-links-h3">Artist</h3>
        </div>
      </div>
      <div className="sidebar-container">
        <h2>MY MUSIC</h2>
        <div className="sidebar-links-container">
          <AlbumIcon className="sidebar-links-icon" />
          <h3 className="sidebar-links-h3">Ablum</h3>
        </div>
        <div className="sidebar-links-container">
          <PersonIcon className="sidebar-links-icon" />
          <h3 className="sidebar-links-h3">Artist</h3>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
