import React, { useEffect, useState } from "react";
import './JuegoDeCompletar.css'

const JuegoCompletar = ({ contenido, gameComplete, reset, gameOver }) => {
  const [oracion, setOracion] = useState("");
  const [opciones, setOpciones] = useState([]);
  const [finalGame, setFinalGame] = useState(false);

  useEffect(() => {
    setOracion(contenido.text);

    const optionRevuelto = arrayRevuelto([...contenido.option]);

    const optionCopy = optionRevuelto.map((opt, i) => ({
      ...opt,
      clicket: false,
      index: i,
    }));

    setOpciones(optionCopy);
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
    const optionsCopy = [...opciones];
    const optionCopy = { ...option, clicket: true };

    if (option.type) {
      gameComplete();
    } else {
      gameOver();
    }

    optionsCopy.splice(option.index, 1, optionCopy);

    setOpciones(optionsCopy);
    setFinalGame(true);
  };

  return (
    <div className="cont-complet-game">
      <p className="titulo-complet-game">Completa la Oracion</p>
      <h1 className="oracion-complet-game">{oracion}</h1>
      <div className="opts-complet-game">
        {opciones.map((opcion, index) => (
          <button
            className={`${
              opcion.clicket && opcion.type
                ? "correcta"
                : opcion.clicket && !opcion.type
                ? "incorrecta"
                : ""
            }`}
            key={index}
            onClick={() => handleClick(opcion)}
            disabled={finalGame}
          >
            <img src={opcion.url} alt={`Opción ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default JuegoCompletar;
