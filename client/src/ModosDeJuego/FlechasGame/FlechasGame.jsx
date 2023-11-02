import React, { useEffect, useState } from "react";
import { levelFlecha } from "../../Contenido/FlechasContenido";
import "./flecha.css";

export default function FlechasGame({ reset, gameComplete, gameOver }) {
  const [img, setImg] = useState([]);
  const [opts, setOpts] = useState([]);
  const [turnOpt, setTurnOpt] = useState(false);
  const [turnImg, setTurnImg] = useState(false);
  const [selectOpt, setSelectOpt] = useState(2);
  const [posibiliti, setPosibiliti] = useState(100);
  const [correct, setCorrect] = useState(0);
  const [imgActual, setImgActual] = useState({});
  const [optActual, setOptActual] = useState({});
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const arrOptRev = arrayRevuelto(levelFlecha.opt);
    setOpts(
      arrOptRev.map((e, i) => ({
        ...e,
        clicked: false,
        correct: false,
        id: i,
      }))
    );
    const arrImgRev = arrayRevuelto(levelFlecha.img);
    setImg(
      arrImgRev.map((e, i) => ({
        ...e,
        clicked: false,
        correct: false,
        id: i,
      }))
    );
    setPosibiliti(levelFlecha.img.length);
    setCorrect(0);
    setSelectOpt(2);
    setTurnImg(false);
    setTurnOpt(false);
    setComplete(false)
  }, [reset]);

  useEffect(() => {
    // Verifica la coincidencia cuando ambas imágenes y opciones están seleccionadas
    if (imgActual.opt !== undefined && optActual.opt !== undefined) {
      if (imgActual.opt && optActual.opt) {
        if (imgActual.opt === optActual.opt) {
          let imgNew = { ...imgActual, correct: true };
          const arrImg = [...img];
          arrImg.splice(imgActual.id, 1, imgNew);
          setImg(arrImg);
          let optNew = { ...optActual, correct: true };
          const arrOpts = [...opts];
          arrOpts.splice(optActual.id, 1, optNew);
          setOpts(arrOpts);

          setCorrect(correct + 1);
        }
        setPosibiliti(posibiliti - 1);
        setSelectOpt(2);
        setTurnImg(false);
        setTurnOpt(false);
        setImgActual({});
        setOptActual({});
      }
    }
  }, [imgActual, optActual, correct]);

  useEffect(() => {
    if (posibiliti === 0) {
      if (correct === img.length) {
        setComplete(true);
        gameComplete();
      } else {
        setComplete(true);
        gameOver();
      }
    }
  }, [correct, posibiliti]);

  const arrayRevuelto = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const turnRound = (type) => {
    return (
      (!turnImg && !turnOpt) ||
      (turnImg && type === "text") ||
      (turnOpt && type === "img")
    );
  };

  const handleClick = (obj) => {
    if (obj.clicked || !turnRound(obj.type)) {
      return;
    }

    obj.clicked = true;

    if (obj.type === "text") {
      setTurnImg(false);
      setTurnOpt(true);
      setOptActual(obj);
    } else {
      setTurnImg(true);
      setTurnOpt(false);
      setImgActual(obj);
    }

    if (selectOpt === 1) {
      // No hagas nada aquí, la comprobación se hace en el useEffect
    } else {
      setSelectOpt(selectOpt - 1);
    }
  };

  return (
    <div className="cont-game-fle">
      <h1 className="title-fle">Selecciona la seña con su significado</h1>
      <div className="cont-img-fle">
        {img.map((e, i) => (
          <img
            className={`img-fle ${e.clicked ? "select" : ""} ${
              complete ? (e.correct ? "complete" : "nocomplete") : ""
            }`}
            src={e.url}
            key={i}
            onClick={() => handleClick(e)}
          ></img>
        ))}
      </div>
      <div className="cont-opt-fle">
        {opts.map((e, i) => (
          <button
            className={`btn-fle ${e.clicked ? "select" : ""} ${
              complete ? (e.correct ? "complete" : "nocomplete") : ""
            }`}
            key={i}
            onClick={() => handleClick(e)}
          >
            {e.text}
          </button>
        ))}
      </div>
    </div>
  );
}
