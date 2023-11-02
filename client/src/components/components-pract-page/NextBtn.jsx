import React, { useContext } from "react";
import rowrigh from "../../assets/rowrigh.png";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";

export default function NextBtn({ link, completado }) {
  const { incrementarBarra } = useContext(UserContext);

  return (
    <Link
      to={completado ? link : null}
      className={`next-btn btn ${completado ? "" : "none" }`}
      onClick={completado ? incrementarBarra : ""}
    >
      Siguiente
      <img src={rowrigh} />
    </Link>
  );
}
