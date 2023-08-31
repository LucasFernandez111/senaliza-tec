import { useEffect, useState } from "react";
import ConetOptionsErro from "../ContOptions/ConetOptionsError";
import Frase from "../Frase/Frase";

export default function ErrorGame({ contenido, gameComplete }) {
  const [optionsImg, setOptionsImg] = useState([]);
  const [frase, setFrase] = useState();
  const [juegoTerminado, setJuegoTerminado] = useState(false);

  useEffect(() => {
    const listOptionCopy = contenido[0].options;
    const fraseCopy = contenido[0].frase;
    setOptionsImg(
      listOptionCopy.map((option, i) => ({
        index: i,
        url: option.url,
        clicket: false,
        result: option.result,
      }))
    );
    setFrase(fraseCopy);
  }, []);

  const handleClick = (option) => {
    const optionCopy = { ...option, clicket: true };
    const optionsCopy = [...optionsImg];
    optionsCopy.splice(option.index, 1, optionCopy);
    setOptionsImg(optionsCopy);
    setJuegoTerminado(true);
  };

  return (
    <div className="cont-error-game">
      <Frase frase={frase}></Frase>

      <ConetOptionsErro
        options={optionsImg}
        juegoTerminado={juegoTerminado}
        handleClick={handleClick}
      ></ConetOptionsErro>
    </div>
  );
}
