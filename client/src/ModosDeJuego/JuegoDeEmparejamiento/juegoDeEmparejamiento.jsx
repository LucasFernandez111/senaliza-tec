import React, { useEffect, useState } from "react";
import Pregunta from "./pregunta";

export const GameDeEmparejamiento = ({
  contenido,
  gameComplete,
  reset,
  gameOver,
}) => {
  const [pregunta, setPregunta] = useState();
  const [options, setOptions] = useState([]);
  const [finalGame, setFinalGame] = useState(false);

  useEffect(() => {
    const { text } = contenido;
    const optionRevuelto = arrayRevuelto([...contenido.option]);

    const optionCopy = optionRevuelto.map((opt, i) => ({
      ...opt,
      clicket: false,
      index: i,
    }));

    setPregunta(text);
    setOptions(optionCopy);
    setFinalGame(false);
  }, [reset]);

  const arrayRevuelto = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const handleClick = (option) => {
    const optionsCopy = [...options];
    const optionCopy = { ...option, clicket: true };

    if (optionCopy.type) {
      gameComplete();
    } else {
      gameOver();
    }

    optionsCopy.splice(option.index, 1, optionCopy);

    setOptions(optionsCopy);
    setFinalGame(true);
  };

  return (
    <div>
      <Pregunta
        onHandleClick={handleClick}
        opciones={options}
        pregunta={pregunta}
        finalGame={finalGame}
      ></Pregunta>
    </div>
  );
};
