import React from "react";
import AbcLib from "./AbcLib";
import HelpButton from "./HelpButton";
import CaminoNiveles from "../../pages/CaminoNiveles";
import "../../pages/style/HomeCont.css";
import { Link } from "react-router-dom";

export default function HomeCont() {
  return (
    <div className="cont-home">
      <div>
        <CaminoNiveles></CaminoNiveles>
      </div>
      <div className="diccionario">
        <AbcLib></AbcLib>
      </div>
    </div>
  );
}
