import React from "react";
import "../styles/Header.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import { logout} from "../features/userSlice";
function Header() {
  const dispatch = useDispatch()
  const setLogoutHandler = (e) => {
     e.preventDefault()
     dispatch(logout({
      
       user:null
     }))
     
  }
  return (
    <div className="header">
      <form className="header-form" action="">
        <SearchIcon />
        <input className="header-input"placeholder="Search" />
      </form>

      <div className="header-icons">
        <NotificationsIcon className="header-icon" />
        <SettingsIcon className="header-icon" />
        <ExitToAppIcon className="header-icon" onClick={setLogoutHandler} />
      </div>
    </div>
  );
}

export default Header;
