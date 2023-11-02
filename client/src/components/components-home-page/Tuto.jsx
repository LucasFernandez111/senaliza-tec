import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TfiHelp } from "react-icons/tfi";
import "../../pages/style/tuto.css";

const Tuto = () => {
  const [showCard, setShowCard] = useState(false);

  const handleHover = () => {
    setShowCard(true);
  };

  const handleHoverOut = () => {
    setShowCard(false);
  };

  return (
    <div className="div-inicial-tuto">
      <div className={`card-hover-tuto ${showCard ? "show-card" : ""} `}>
        <div className="title-card-tuto">
          <h1 style={{ fontSize: "20px" }}>TUTORIAL</h1>
        </div>
        <div className="parrafo-card-tuto">
          <p style={{ fontSize: "17px" }}>
            Aprende como jugar
          </p>
        </div>
      </div>

      <div onMouseLeave={handleHoverOut} onMouseOver={handleHover}>
        <Link
          to={"/tutorial/0"}
          className="tuto-link"
          style={{ background: "#74A9DB" }}
        >
          <div>
            <TfiHelp size={60}></TfiHelp>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Tuto;
