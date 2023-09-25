import { Link } from "react-router-dom";
import "./boton.css";
import "../../../pages/style/homedemo.css";
export function BtnInicio({ name, estilo, path }) {
  return (
    <Link to={path} className={estilo}>
      <span>{name}</span>
    </Link>
  );
}
