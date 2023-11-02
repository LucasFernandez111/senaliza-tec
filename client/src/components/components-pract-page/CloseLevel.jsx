import React from "react";
import cross from "../../assets/cross.png";
import { Link } from "react-router-dom";

export default function CloseLevel() {
  const link = "/home";
  return (
    <div className="close-level">
      <Link style={{ all: "unset", cursor:"pointer" }} to={link}>
        <img src={cross} />
      </Link>
    </div>
  );
}
