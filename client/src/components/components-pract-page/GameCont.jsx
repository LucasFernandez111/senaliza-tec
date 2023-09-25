import React from "react";
import Memogame from "./../../ModosDeJuego/JuegoDeMemoria/Memogame/Memogame";
import AdivinaGame from "./../../ModosDeJuego/AdivinanzaDeSeñas/AdivinaGame/AdivinaGame";
import ErrorGame from "./../../ModosDeJuego/JuegoDeIdentificacionDeErrores/ErrorGame/ErrorGame";
import { GameDeEmparejamiento } from "../../ModosDeJuego/JuegoDeEmparejamiento/juegoDeEmparejamiento";
import JuegoCompletar from "../../ModosDeJuego/JuegoDeCompletar/JuegoDeCompletar";
import JuegoOperaciones from "../../ModosDeJuego/JuegoOperaciones/JuegoOperaciones";
import JuegoOrdenamiento from "../../ModosDeJuego/JuegoOrdenamiento/JuegoOrdenamiento";

export default function GameCont({
  contJuego,
  handleCompleteGame,
  reset,
  gameOver,
}) {
  const { modeGame } = contJuego;
  const { cont } = contJuego;
  const { style } = contJuego;

  let componente;

  switch (modeGame) {
    case "juego-de-emparejamiento":
      componente = (
        <GameDeEmparejamiento
          contenido={cont}
          gameComplete={handleCompleteGame}
          reset={reset}
          gameOver={gameOver}
        ></GameDeEmparejamiento>
      );
      break;
    case "juego-de-memoria":
      componente = (
        <Memogame
          contenido={cont}
          style={style}
          gameComplete={handleCompleteGame}
        ></Memogame>
      );
      break;
    case "adivinanza-de-señas":
      componente = (
        <AdivinaGame
          contenido={cont}
          gameComplete={handleCompleteGame}
          gameOver={gameOver}
          reset={reset}
        ></AdivinaGame>
      );
      break;
    case "juego-de-ordenamiento":
      componente = <div>"juego-de-ordenamiento"</div>;
      break;
    case "juego-de-completar":
      componente = (
        <JuegoCompletar
          contenido={cont}
          gameComplete={handleCompleteGame}
          gameOver={gameOver}
          reset={reset}
        ></JuegoCompletar>
      );
      break;
    case "juego-de-identificar-errores":
      componente = (
        <ErrorGame
          contenido={cont}
          gameComplete={handleCompleteGame}
        ></ErrorGame>
      );
      break;
    case "juego-de-operaciones":
      componente = (
        <JuegoOperaciones
          gameComplete={handleCompleteGame}
          reset={reset}
          gameOver={gameOver}
        ></JuegoOperaciones>
      );
      break;
    case "juego-ordenamiento":
      componente = (
        <JuegoOrdenamiento
          gameComplete={handleCompleteGame}
          reset={reset}
          gameOver={gameOver}
        ></JuegoOrdenamiento>
      );
      break;

    default:
      componente = null;
      break;
  }

  return <div className="game-cont">{componente}</div>;
}
