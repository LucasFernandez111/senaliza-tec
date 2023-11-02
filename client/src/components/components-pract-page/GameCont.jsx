import React from "react";
import Memogame from "./../../ModosDeJuego/JuegoDeMemoria/Memogame/Memogame";
import AdivinaGame from "./../../ModosDeJuego/AdivinanzaDeSeñas/AdivinaGame/AdivinaGame";
import ErrorGame from "./../../ModosDeJuego/JuegoDeIdentificacionDeErrores/ErrorGame/ErrorGame";
import { GameDeEmparejamiento } from "../../ModosDeJuego/JuegoDeEmparejamiento/juegoDeEmparejamiento";
import JuegoCompletar from "../../ModosDeJuego/JuegoDeCompletar/JuegoDeCompletar";
import JuegoOperaciones from "../../ModosDeJuego/JuegoOperaciones/JuegoOperaciones";
import JuegoOrdenamiento from "../../ModosDeJuego/JuegoOrdenamiento/JuegoOrdenamiento";
import FamiliaGame from "../../ModosDeJuego/FamiliaGame/FamiliaGame";
import FlechasGame from "../../ModosDeJuego/FlechasGame/FlechasGame";
import GameRPL from "../../ModosDeJuego/JuegoPRLetras/GameRPL";
import ImageGame from "../../ModosDeJuego/ImageGame/ImageGame";

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
    case "flechas-game":
      componente = (
        <FlechasGame
          gameComplete={handleCompleteGame}
          reset={reset}
          gameOver={gameOver}
        ></FlechasGame>
      );
      break;
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
    case "familia-game":
      componente = (
        <FamiliaGame
          gameComplete={handleCompleteGame}
          reset={reset}
          gameOver={gameOver}
        ></FamiliaGame>
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
    case "juego-pr-letras":
      componente = (
        <GameRPL
          cont={cont}
          gameComplete={handleCompleteGame}
          gameOver={gameOver}
          reset={reset}
        ></GameRPL>
      );
      break;
    case "image-game":
      componente = (
        <ImageGame
          cont={cont}
          gameComplete={handleCompleteGame}
          gameOver={gameOver}
          reset={reset}
        ></ImageGame>
      );
      break;
    default:
      componente = null;
      break;
  }

  return <div className="game-cont">{componente}</div>;
}
