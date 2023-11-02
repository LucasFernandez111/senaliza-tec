import React from "react";
import "./JuegoOrdenamiento.css";
import { contOrdenamiento } from "../../Contenido/contenidoOperacion";
import { useState, useEffect } from "react";

const JuegoOrdenamiento = ({ gameComplete, reset, gameOver }) => {
  const contOrdenamientoCopy = contOrdenamiento;

  const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * contOrdenamientoCopy.length);
  };
  const [numberCopy, setNumberCopy] = useState(generarNumeroAleatorio());

  const señas = contOrdenamientoCopy[numberCopy].señas;
  const opciones = contOrdenamientoCopy[numberCopy].opciones;
  const orden = contOrdenamiento[numberCopy].orden;
  const [arrayImg, setArrayImg] = useState([]);
  const [incorrecto, setIncorrecto] = useState(false);
  const [correcto, setCorrecto] = useState(false);
  const [blockButton, setBlockButton] = useState(false);
  const [isClick, setIsClick] = useState([]);

  useEffect(() => {
    handleReintentar();
  }, [reset]);
  useEffect(() => {
    if (arrayImg.length == orden.length) {
      validacion();
    } else {
      return;
    }
  }, [arrayImg]);

  const handleReintentar = () => {
    const nuevoNumeroAleatorio = generarNumeroAleatorio();
    setArrayImg([]);
    setNumberCopy(nuevoNumeroAleatorio);
    setIsClick([]);
  };

  const handleClick = (imagenSelect, index) => {
    setArrayImg((prevArrayImg) => [...prevArrayImg, imagenSelect]);
    setIsClick((e) => [...e, index]);
  };

  const validacion = () => {
    if (JSON.stringify(arrayImg) === JSON.stringify(orden)) {
      gameComplete();
    } else {
      gameOver();
    }
  };

  return (
    <div className="div-inicial-ordenamiento">
      <div style={{ marginBottom: "60px" }}>
        <h1 style={{ fontSize: "45px" }}>
          <strong>
            Presione las opciones de abajo según el orden de las siguientes
            señas:
          </strong>
        </h1>
      </div>
      <div className="div-img-principal">
        {señas.map((e, index) => {
          return (
            <div className="div-img-ordenamiento" key={index}>
              <img className="img-ordenamiento" src={e} />
            </div>
          );
        })}
      </div>
      <div className="div-opciones-ordenamiento">
        {opciones.map((e, index) => {
          return (
            <button
              className={`button${isClick.includes(index) ? "Click" : ""}`}
              onClick={() => {
                handleClick(e, index);
              }}
              key={index}
            >
              {e}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default JuegoOrdenamiento;
