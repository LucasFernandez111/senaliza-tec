import React, {useContext} from "react";
import rowLeft from "../../assets/rowlefth.png";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";

export default function ReturnBtn({ link }) {

  const { desincrementarBarra } = useContext(UserContext)

  return (
    <Link to={link} className="return-btn btn" onClick={desincrementarBarra}>
      <img src={rowLeft} />
      Atras
    </Link>
  );
}
