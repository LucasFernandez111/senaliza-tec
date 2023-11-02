import React from "react";

import "./unauthenticated.css";
import { Link } from "react-router-dom";

const UnAuthenticated = () => {
  return (
    <div className="pag-box">
      <div className="pag-box-cont">
        <h1>Upss.. Lo siento!</h1>

        <h2>No estas authenticado para ver esta pagina</h2>
        <Link
          className="nav-link"
          style={{
            width: "160px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",

            padding: "5px",
          }}
          to={"/login"}
        >
          Ingresar
        </Link>
      </div>
    </div>
  );
};

export default UnAuthenticated;
