import React, { useEffect } from "react";
import "../JuegoOperaciones/JuegoOperaciones.css";
import { operaciones } from "../../Contenido/contenidoOperacion";
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Draggable from "../../components/components-dragDrop/Draggable";
import DropContainer from "../../components/components-dragDrop/DropContainer";

const JuegoOperaciones = ({ gameComplete, reset, gameOver, cont }) => {
  const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * operaciones.length);
  };

  useEffect(() => {
    handleReintentar();
  }, [reset]);
  const [numberCopy, setNumberCopy] = useState(generarNumeroAleatorio());
  const [bloquearBoton, setBloquearBoton] = useState(false);
  const [correcto, setCorrecto] = useState(false);
  const [inCorrecto, setIncorrecto] = useState(false);
  const operacionesCopy = operaciones[numberCopy];
  const señas = operacionesCopy.señas;
  const opciones = operacionesCopy.opciones;
  const result = operacionesCopy.resultado;

  const [showImg, setShowImg] = useState();
  const [imgSelect, setImgSelect] = useState([]);

  const handleReintentar = () => {
    const nuevoNumeroAleatorio = generarNumeroAleatorio();
    setNumberCopy(nuevoNumeroAleatorio);
    setBloquearBoton(false);
    setIncorrecto(false);
    setShowImg(false);
  };

  const handleDragEnd = (event) => {
    const { id } = event.active;
    setImgSelect([id]);
    if (id == result) {
      setCorrecto(true);
      gameComplete();
      setShowImg(true);
      setBloquearBoton(true);
    } else {
      setIncorrecto(true);
      setImgSelect([]);
      gameOver();
    }
  };

  return (
    <DndContext onDragEnd={bloquearBoton ? "" : handleDragEnd}>
      <div className="cont-home-operaciones">
        <div className="operations">
          <img className="img-operaciones" src={señas[0]} alt="" />

          <span className="signo">{operacionesCopy.signo}</span>

          <img className="img-operaciones" src={señas[1]} alt="" />

          <span className="signo">=</span>

          {!showImg ? (
            <div className="img-operaciones">
              <DropContainer id={result}></DropContainer>
            </div>
          ) : (
            <img
              className={
                inCorrecto
                  ? "img-result-icorrecto img-operaciones"
                  : "img-result-correcto img-operaciones"
              }
              src={result}
            ></img>
          )}
        </div>

        <div className="options">
          {opciones.map((e, i) => {
            if (imgSelect.includes(e)) return;
            return (
              <Draggable key={i} id={e}>
                <img className="img-options" src={e}></img>
              </Draggable>
            );
          })}
        </div>
      </div>
    </DndContext>
  );
};

export default JuegoOperaciones;
