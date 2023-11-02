import Tabla from "../Tabla/Tabla";
import { useState, useEffect } from "react";
import "./MemoStyle.css";
import PreviewMemo from "../../../assets/PreviewMemo.png";

export default function Memogame({ contenido, gameComplete, style }) {
  const { items } = contenido;

  const [contenidoRevueltoDeLaTabla, setContenidoRevueltoDeLaTabla] = useState(
    []
  );
  const [bloqueSeleccionado, setBloqueSeleccionado] = useState(null);
  const [animacion, setAnimacion] = useState(false);
  const [mostrarJuego, setMostrarJuego] = useState(false);
  const [time, setTime] = useState(3);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime(time - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    } else iniciarJuego();
  }, [time]);

  const iniciarJuego = () => {
    setMostrarJuego(true);
    const listaContenidoRevuelto = arrayRevuelto([...items]);
    setContenidoRevueltoDeLaTabla(
      listaContenidoRevuelto.map((item, i) => ({
        index: i,
        item: item.item,
        name: item.name,
        flipped: false,
        type: item.type,
      }))
    );

    setTimeout(() => {
      setContenidoRevueltoDeLaTabla(
        listaContenidoRevuelto.map((item, i) => ({
          index: i,
          item: item.item,
          name: item.name,
          flipped: true,
          type: item.type,
        }))
      );
    }, 250);

    setTimeout(() => {
      setContenidoRevueltoDeLaTabla(
        listaContenidoRevuelto.map((item, i) => ({
          index: i,
          item: item.item,
          name: item.name,
          flipped: false,
          type: item.type,
        }))
      );
    }, 3000);
  };

  const arrayRevuelto = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const verifictComplete = (contenido) => {
    return contenido.every((item) => item.flipped);
  };

  const handleClick = (blocke) => {
    const blockeDadoVuelta = { ...blocke, flipped: true };
    let contenidoRevueltoDeLaTablaCopia = [...contenidoRevueltoDeLaTabla];
    contenidoRevueltoDeLaTablaCopia.splice(blocke.index, 1, blockeDadoVuelta);
    setContenidoRevueltoDeLaTabla(contenidoRevueltoDeLaTablaCopia);
    if (bloqueSeleccionado === null) {
      setBloqueSeleccionado(blocke);
    } else if (bloqueSeleccionado.name === blocke.name) {
      setBloqueSeleccionado(null);
      if (verifictComplete(contenidoRevueltoDeLaTablaCopia)) {
        gameComplete();
      }
    } else {
      setAnimacion(true);
      setTimeout(() => {
        contenidoRevueltoDeLaTablaCopia.splice(blocke.index, 1, blocke);
        contenidoRevueltoDeLaTablaCopia.splice(
          bloqueSeleccionado.index,
          1,
          bloqueSeleccionado
        );
        setContenidoRevueltoDeLaTabla(contenidoRevueltoDeLaTablaCopia);
        setBloqueSeleccionado(null);
        setAnimacion(false);
      }, 1000);
    }
  };

  return (
    <div className="memo-game-cont">
      {!mostrarJuego && (
        <div className="div-inicial">
          <div className="blog-post">
            <div className="blog-post_info">
              <div className="blog-title">
                <h1 className="blog-post_title">JUEGO DE MEMORIA</h1>
              </div>
              <div style={{ width: "100%", textAlign: "center" }}>
                <p style={{ fontSize: "25px" }}>
                  Indique la imagen con su respectiva seña.
                </p>
              </div>
              <div className="time">
                <span>{time}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {mostrarJuego && (
        <Tabla
          blockes={contenidoRevueltoDeLaTabla}
          animacion={animacion}
          handleClick={handleClick}
          style={style}
        />
      )}
    </div>
  );
}
