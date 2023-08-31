import React from "react";
import NavBar from "../components/components-pract-page/NavBar";
import "./style/Abecedario.css";
import { Link } from "react-router-dom";

const Abecedario = () => {
  const abc = new Array(27).fill("");

  return (
    <div className="home-page">
      <nav className="nav-bar">
        <NavBar></NavBar>
      </nav>
      <div className="contenedor">
        <Link to={"/"} className="elemento-final">
          Regresar
        </Link>

        <span className="elemento-centro">¡Aprende el Abecedario LSA!</span>
      </div>

      <div className="container">
        <section className="card-section">
          {abc.map((e, i) => {
            return <div className="card">{i}</div>;
          })}
        </section>
      </div>
    </div>
  );
};

export default Abecedario;
