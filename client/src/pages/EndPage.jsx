import React from "react";
import { Link } from "react-router-dom";
import "./style/EndPage.css";

export const EndPage = () => {
  return (
    <>
      
        <div className="caja-completa">
        <div className="caja-fondo">
          <h1>FELICIDADES!</h1>
          <p>Has completado la Demo de <span style={{fontWeight : '600'}}>Señaliza<span style={{color : '#de4a97' }}>Tec</span></span></p>
          <p>Muchas gracias por jugar</p>
          <Link to={"/"}>REGRESAR INICIO</Link>
        </div>
      </div>
    </>
  );
};

export default EndPage;
