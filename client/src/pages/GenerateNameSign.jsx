import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
const GenerateNameSign = () => {
  const { nameUser } = useContext(UserContext);

  const nameUserArray = nameUser.split("");
  return (
    <div style={{ color: "black" }}>
      <h1>TU NOMBRE ES : {nameUser}</h1>
    </div>
  );
};

export default GenerateNameSign;
