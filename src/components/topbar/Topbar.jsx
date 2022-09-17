import React from "react";
import { Link } from "react-router-dom";

import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img className="logo" src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:120/https://file-uploads.teachablecdn.com/ffe442a414904138b18e5b532bba9da1/167af06d542e43a999f07c44645dbc1d" alt=""/>
        </div>
        <div className="topRight">
           <Link to="/newproduct" className="topbar__button__link"><h3 className="topbar__button">Upload Your New Course <span>+</span></h3></Link> 
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
          <img src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/hl1PBlgTTlWt9m8RnkCS" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}