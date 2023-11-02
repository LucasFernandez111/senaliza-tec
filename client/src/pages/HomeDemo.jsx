import React, { useContext, useEffect } from "react";
import { BtnInicio } from "./../components/components-home-demo/boton/boton";
import { UserContext } from "../context/UserProvider";
import "./style/homedemo.css";

import "animate.css";

const HomeDemo = () => {
  const { reset } = useContext(UserContext);

  useEffect(() => {
    reset();
  }, []);

  return (
    <div className="home-demo animate__animated animate__fadeIn">
      <div className="box-inicio animate__animated animate__fadeInUp">
        <div className="box-completa">
          <div className="botones">
            <img
              className="img-home-demo"
              src="/src/assets/logo.png"
              alt="Logo de SeñalizaTec"
            />
            <h1 className="title">Comenzamos</h1>
            <div className="box-homedemo">
              <div className="box-demo">
                <BtnInicio
                  path="/login"
                  name="Iniciar Sesion"
                  estilo="btn1-inicio"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDemo;
