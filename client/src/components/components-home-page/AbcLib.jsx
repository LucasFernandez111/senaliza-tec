import React, { useState } from "react";
import { Link } from "react-router-dom";
import book from "../../assets/diccionary.svg";

export default function AbcLib() {
  const [showCard, setShowCard] = useState(false);

  const handleHover = () => {
    setShowCard(true);
  };

  const handleHoverOut = () => {
    setShowCard(false);
  };

  return (
    <div className="div-inicial-abc">
      <div className={`card-hover ${showCard ? "show-card" : ""} `}>
        <div className="title-card-abc">
          <h1 style={{ fontSize: "20px" }}>ABECEDARIO</h1>
        </div>
        <div className="parrafo-card-abc">
          <p style={{ fontSize: "17px" }}>
            Aprende mas sobre la lengua de señas
          </p>
        </div>
      </div>

      <div onMouseLeave={handleHoverOut} onMouseOver={handleHover}>
        <Link to={"/abclib"} className="caja-diccionario">
          <img src={book} className="diccionary-book" alt="" />
        </Link>
      </div>
    </div>
  );
}
