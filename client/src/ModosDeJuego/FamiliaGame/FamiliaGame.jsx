import { level1 } from "../../Contenido/contenidoFamili";
import React, { useEffect, useState } from "react";
import "./famili.css";
import BtnOpt from "./BtnOpt";

export default function FamiliaGame({ gameComplete, reset, gameOver }) {
  const [imgArr, setImgArr] = useState([]);
  const [optsArr, setOptsArr] = useState([]);
  const [optCorrect, setOptCorrect] = useState("");
  const [final, setFinal] = useState(false);
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    setImgArr(level1.img);
    setOptsArr(level1.opt.map((e) => ({ ...e, clicked: false })));
    setOptCorrect(level1.optCorrect);
    setCorrect(false);
    setFinal(false);
  }, [reset]);

  const handleClick = (obj) => {
    if (final) {
      return;
    }
    obj.clicked = true;
    setFinal(true);
    if (obj.opt === optCorrect) {
      setCorrect(true);
      gameComplete();
    } else {
      gameOver();
    }
  };

  return (
    <div className="cont-famili-game">
      <h1 className="title-fa">
        ¿Cuál sería el significado de la union de la siguientes señas?
      </h1>
      <div className="cont-img">
        {imgArr.map((e, i) => (
          <img className="img-fa" src={e.url} key={i} />
        ))}
      </div>
      <div className="cont-opts">
        {optsArr.map((e, i) => (
          <BtnOpt
            correct={correct}
            e={e}
            handleClick={handleClick}
            key={i}
          ></BtnOpt>
        ))}
      </div>
    </div>
  );
}
