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
    }, 1750);
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
        <div class="blog-post">
          <div class="blog-post_img">
            <img src={PreviewMemo} alt="" />
          </div>
          <div class="blog-post_info">
            <div>
              <h1 class="blog-post_title">JUEGO DE MEMORIA</h1>
            </div>
            <p>Indique la palabra con su respectiva seña.</p>
            <div className="time">
              <span>{time}</span>
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
