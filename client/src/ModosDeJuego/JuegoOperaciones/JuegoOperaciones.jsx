import React, { useEffect } from "react";
import "../JuegoOperaciones/JuegoOperaciones.css";
import { operaciones } from "../../Contenido/contenidoOperacion";
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Draggable from "../../components/components-dragDrop/Draggable";
import DropContainer from "../../components/components-dragDrop/DropContainer";

const JuegoOperaciones = ({ gameComplete, reset, gameOver }) => {
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
  const [imgSelect, setImgSelect] = useState("");

  const handleReintentar = () => {
    const nuevoNumeroAleatorio = generarNumeroAleatorio();
    setNumberCopy(nuevoNumeroAleatorio);
    setBloquearBoton(false);
    setIncorrecto(false);
    setShowImg(false);
  };

  const handleDragEnd = (event) => {
    if (event.active.id == result) {
      setCorrecto(true);
      gameComplete();
      setShowImg(true);
    } else {
      setIncorrecto(true);
      gameOver();
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="div-inicial" style={{ width: "100%", height: "100%" }}>
        <div className="div-operaciones">
          <div className="div-seña">
            <img className="img-operaciones" src={señas[0]} alt="" />
          </div>
          <div className="div-signo">
            <h1>{operacionesCopy.signo}</h1>
          </div>
          <div className="div-seña">
            <img className="img-operaciones" src={señas[1]} alt="" />
          </div>
          <div className="div-signo">
            <h1>=</h1>
          </div>

          {!showImg ? (
            <div className="div-resultado">
              <DropContainer id={result}></DropContainer>
            </div>
          ) : (
            <div className="div-resultado" style={{ border: "none" }}>
              <img
                className={
                  inCorrecto ? "img-result-icorrecto" : "img-result-correcto"
                }
                src={result}
              ></img>
            </div>
          )}
        </div>
        <div className="div-opciones-operaciones">
          {opciones.map((e, i) => {
            return (
              <Draggable key={i} id={e}>
                <button
                  onClick={() => {
                    if (!bloquearBoton) {
                      setBloquearBoton(true);
                      setImgSelect(e);
                      setShowImg(true);
                      handleClick(e);
                    } else return;
                  }}
                >
                  <img src={e}></img>
                </button>
              </Draggable>
            );
          })}
        </div>
      </div>
    </DndContext>
  );
};

export default JuegoOperaciones;
