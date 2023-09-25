import React, { useEffect, useState } from "react";
import PathCap from "./PathCap";
import { seccionLevels } from "../../Contenido/Niveles";

const BotonesLevels = () => {
  const [sectLV, setSectLV] = useState([]);

  useEffect(() => {
    setSectLV(seccionLevels);
  }, []);

  return (
    <>
      <div className="levels-path">
        {sectLV.map((e, i) => 
          <PathCap seccion={e} key={i}></PathCap>)}
      </div>
    </>
  );
};

export default BotonesLevels;
