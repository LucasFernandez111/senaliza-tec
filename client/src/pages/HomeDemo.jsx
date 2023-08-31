import React, { useContext, useEffect } from "react";
import { BtnInicio } from "./../components/components-home-demo/boton/boton";
import { UserContext } from "../context/UserProvider";

import 'animate.css';

const HomeDemo = () => {

  const { reset } = useContext(UserContext)

  useEffect(()=>{
    reset()
  },[])

  return (
    <div className="home-demo animate__animated animate__fadeIn" >
      <div className="box-inicio animate__animated animate__fadeInUp">
        <div className="box-completa">
          <div className="botones">
          <img className="img-home-demo" src="/src/assets/logo.png" alt="Logo de SeñalizaTec" />
          <h1 className="title">Comenzamos</h1>
            <BtnInicio name="Iniciar Demo" estilo="btn1-inicio" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDemo;
