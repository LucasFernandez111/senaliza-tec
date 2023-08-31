import React from "react";
import ReturnBtn from "./ReturnBtn";
import NextBtn from "./NextBtn";

export default function ButtonCont({ links, completado }) {
  return (
    <div className="button-cont">
      <div className="button-box">
        <ReturnBtn link={links.return}></ReturnBtn>
        <NextBtn link={links.next} completado={completado}></NextBtn>
      </div>
    </div>
  );
}
