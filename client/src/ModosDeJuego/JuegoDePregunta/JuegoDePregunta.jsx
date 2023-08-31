import { useState } from "react";
import { contenido } from "../../Contenido/contenidoGamePreguntas";

const JuegoDePregunta = () => {
  const numeroRandom = Math.floor(Math.random() * contenido.length);
  const copyOpciones = contenido[0].opciones;
  const copyImagenes = contenido[0].palabra;
  const copyRepuesta = contenido[0].respuesta;

  const [mostrarImagen, setMostrarImagen] = useState(false);
  const [showImage, setShowImage] = useState();
  const [empezar, setEmpezar] = useState(false);
  const [correcto, setCorrecto] = useState(false);
  const [incorrecto, setIncorrecto] = useState(false);
  const [stopJuego, setStopJuego] = useState(false);
  let tiempo = 1000;

  const handleClickEmpezar = () => {
    copyImagenes.forEach((e) => {
      setEmpezar(true);
      setTimeout(() => {
        setMostrarImagen(true);
        setShowImage(e);
      }, tiempo);
      tiempo = tiempo + 2000;
    });
  };

  const handleClick = (imagenSeleccionada) => {
    if (imagenSeleccionada === copyRepuesta) {
      setCorrecto(true);
    } else setIncorrecto(true);
  };

  const reintentar = () => {};

  return (
    <div>
      <button onClick={handleClickEmpezar}>Empezar</button>
      <div>
        {mostrarImagen && (
          <img width={"400px"} height={"400px"} src={showImage}></img>
        )}
      </div>

      {copyOpciones.map((e, index) => {
        if (empezar)
          return (
            <button
              onClick={() => {
                setStopJuego(true);
                stopJuego ? "" : handleClick(e);
              }}
              key={index}
            >
              {e}
            </button>
          );
      })}

      {correcto && <h1>Correcto la palabra es : {copyRepuesta}</h1>}
      {incorrecto && (
        <div>
          <h1>Incorrecto</h1>
          <button onClick={reintentar}>Reintentar</button>
        </div>
      )}
    </div>
  );
};

export default JuegoDePregunta;
