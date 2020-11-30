import React from "react";
import "../styles/Header.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from '@material-ui/icons/Search';
function Header() {
  return (
    <div className="header">
      <form action="">
          <SearchIcon/>
        <input placeholder="Search" />
      </form>

      <div className="header-icons">
        <NotificationsIcon className="header-icon" />
        <SettingsIcon className="header-icon" />
        <ExitToAppIcon className="header-icon" />
      </div>
    </div>
  );
}

export default Header;
