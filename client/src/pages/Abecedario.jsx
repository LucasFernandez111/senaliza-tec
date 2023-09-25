import React from "react";
import NavBar from "../components/components-pract-page/NavBar";
import "./style/Abecedario.css";
import { Link } from "react-router-dom";
import { imagenesAbc } from "../Contenido/abecedario.js";
const Abecedario = () => {
  const imagenesAbcCopy = imagenesAbc;

  return (
    <div className="home-page">
      <nav className="nav-bar">
        <NavBar></NavBar>
      </nav>
      <div className="contenedor">
        <Link to={"/home"} className="elemento-final">
          Regresar
        </Link>

        <span className="elemento-centro">¡Aprende el Abecedario LSA!</span>
      </div>

      <div className="container">
        <section className="card-section">
          {imagenesAbcCopy.map((e, i) => {
            return (
              <div className="card">
                <img key={i} src={e} alt="" />
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Abecedario;
