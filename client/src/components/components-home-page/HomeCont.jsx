import React from "react";
import AbcLib from "./AbcLib";
import CaminoNiveles from "../../pages/CaminoNiveles";
import "../../pages/style/HomeCont.css";
import Tuto from "./Tuto";
import Secciones from "./Secciones";
import { TfiHelp } from "react-icons/tfi";
import { UserContext } from "../../context/UserProvider";
import { useContext } from "react";

export default function HomeCont() {
  const { nivelesDesbloqueados } = useContext(UserContext);

  return (
    <div className="cont-home">
      <div className="div-secciones">
        <Secciones></Secciones>
      </div>
      <div className="div-camino">
        <CaminoNiveles></CaminoNiveles>
      </div>

      {nivelesDesbloqueados.length === 1 && (
        <div className="msj-tuto">
          <div className="text-cont">
            <p>
              Complete el tutorial ({" "}
              <TfiHelp className="btn-info-tuto" size={16}></TfiHelp> ) para
              poder aprender mas sobre la lengua de señas argentina (LSA)
            </p>
          </div>
          <div className="arrow"></div>
        </div>
      )}
      <div className="div-abc-tuto">
        <div className="div-manejador">
          <AbcLib></AbcLib>
        </div>
        <div className="div-manejador">
          <Tuto></Tuto>
        </div>
      </div>
    </div>
  );
}
