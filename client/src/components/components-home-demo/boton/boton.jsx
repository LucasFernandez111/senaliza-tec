import { Link } from "react-router-dom";
import "./boton.css";
export function BtnInicio({ name, estilo }) {
  return (
    <Link to={"/home"} className={estilo}>
      <span>{name}</span>
    </Link>
  );
}
