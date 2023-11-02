import React,  {useContext} from "react";
import CloseLevel from "./CloseLevel";
import { UserContext } from "../../context/UserProvider";


export default function ContTop() {

  const { barraDeProgreso } = useContext(UserContext)

  return (
    <div className="cont-top">
      <CloseLevel></CloseLevel>
      <div className="bar-progress">
        <div
        style={{
          maxWidth: '100%',
          width: `${barraDeProgreso}%`,
          height: '20px',
          backgroundColor: '#1555a8',
          borderRadius: "14px",
          margin: "2px 6px 6px 2px",
        }}
      ></div>
      </div>
    </div>
  );
}
