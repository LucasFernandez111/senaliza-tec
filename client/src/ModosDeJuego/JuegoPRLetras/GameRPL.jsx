import React, { useState, useEffect } from "react";
import "./GameRPL.css"

export default function GameRPL({ gameComplete, gameOver, reset, cont }) {
  const { pregunta, opciones } = cont;
  const [preguntaState, setPreguntaState] = useState("");
  const [opcionesState, setOpcionesState] = useState([]);
  const [final, setFinal] = useState(false);

  useEffect(() => {
    // Función para mezclar aleatoriamente las opciones
    const arrayRevuelto = (a) => {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a.map((opcion, index) => ({
        ...opcion,
        id: index,
        clicked: false,
      }));
    };

    setPreguntaState(pregunta);
    setOpcionesState(arrayRevuelto(opciones));
    setFinal(false);
  }, [reset]);

  const handleClick = (opcion) => {
    if (!opcion.clicked) {
      const opcionesActualizadas = opcionesState.map((op) => {
        if (op.id === opcion.id) {
          return { ...op, clicked: true };
        }
        return op;
      });

      setOpcionesState(opcionesActualizadas);

      if (!opcion.opcion) {
        gameOver();
      } else {
        gameComplete();
      }

      setFinal(true);
    }
  };

  return (
    <div className="cont-grpl">
      <h1 className="title-grpl">{preguntaState}</h1>
      <div>
        {opcionesState.map((opcion) => (
          <button
            key={opcion.id}
            onClick={() => handleClick(opcion)}
            disabled={final}
            className={` btn-grpl ${
              opcion.clicked ? (opcion.opcion ? "correcto" : "incorrecto") : ""
            }`}
          >
            {opcion.text}
          </button>
        ))}
      </div>
    </div>
  );
}
