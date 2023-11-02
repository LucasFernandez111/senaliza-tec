import React from "react";
import "../../pages/style/Secciones.css";
import { useState } from "react";

const Secciones = () => {
  const [estilo, setEstilo] = useState({});
  const [styleLetter, setStyleLetter] = useState({});

  const handleClick = () => {
    // setEstilo({
    //   background: "#235293",
    //   width: "97%",
    //   display: "flex",
    //   alignItems: "center",
    //   borderRadius: "13px",
    // });
    // setStyleLetter({ marginLeft: "20px" });
  };
  return (
    <div className="div-principal">
      <div className="div-manejador-secciones">
        <a className="secciones" href="#numeros">
          <div className="borde-cian"></div>
          <a href="#numeros">Números</a>
        </a>
        <a className="secciones" href="#colores">
          <div className="borde-cian"></div>
          <a href="#colores">Colores</a>
        </a>
        <a className="secciones" href="#familia">
          <div className="borde-cian"></div>
          <a href="#familia">Familia</a>
        </a>
        <a className="secciones" href="#dias">
          <div className="borde-cian"></div>
          <a href="#dias">Días y Meses</a>
        </a>
        <a className="secciones" href="#preguntasBasicas">
          <div className="borde-cian"></div>
          <a href="#preguntasBasicas">Preguntas Básicas</a>
        </a>
      </div>
      <div className="linea-seccion"> </div>
    </div>
  );
};

export default Secciones;
