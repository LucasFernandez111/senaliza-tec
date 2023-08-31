import React from "react";
import logo from "./../../assets/log.png";
import profile from "../../assets/profile.png";
import start from "../../assets/Vector.png";

export default function NavBar() {
  return (
    <div className="nav-bar-home">
      <div className="nav-bar-logo">
        <img src={logo} />
      </div>
{/*
      <div className="nav-bar-count">
        <img src={profile} className="img-profile-count" />
        <div className="star-count">
          <div className="start-icon">
            <img src={start} />
          </div>
          <p>100</p>
        </div>
      </div>
      */}
    </div>
  );
}
