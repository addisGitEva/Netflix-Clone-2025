import React from "react";
import "./header.css";
import Nlogo from "../../assets/images/Nlogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Header() {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={Nlogo} alt="Netflix Logo" width="100" />
            </li>
            <li>Netflix </li>
            <li> Home</li>
            <li>TVshows </li>
            <li> Movies</li>
            <li>Latest </li>
            <li> MyList</li>
            <li> Browse By Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <SearchIcon />
            <NotificationsNoneIcon />
            <AccountCircleIcon />
            <ArrowDropDownIcon />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
