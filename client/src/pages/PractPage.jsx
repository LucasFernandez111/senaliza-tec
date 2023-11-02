import React, { useContext, useEffect, useState } from "react";
import NavBar from "./../components/components-pract-page/NavBar";
import ContTop from "./../components/components-pract-page/ContTop";
import GameCont from "./../components/components-pract-page/GameCont";
import ButtonCont from "./../components/components-pract-page/ButtonCont";
import { useParams } from "react-router";
import { contGames } from "../Contenido/ContenidoGame";
import { UserContext } from "../context/UserProvider";
import BotonReset from "../ModosDeJuego/BotonReset/BotonReset";
import axios from "axios";

export default function PractPage() {
  const { id } = useParams();
  const [links, setLinks] = useState({});
  const [completado, setCompletado] = useState(false);
  const [deblock, setDeblock] = useState({});
  const [contenidoDelJuego, setContenidoDelJuego] = useState({});
  const [reset, setReset] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const {
    desbloquearLeccion,
    desbloquearModoJuego,
    desbloquearNiveles,
    nameUser,
  } = useContext(UserContext);

  useEffect(() => {
    const contGame = contGames[id];
    setContenidoDelJuego(contGame);
    setLinks(contGame.link);
    setCompletado(false);
    setDeblock(contGame.desblock, nameUser);
  }, [id]);

  /**
   * Esta funcion desbloquea las rutas para acceder a los siguientes modos de juego, lecciones o niveles.
   */
  const handleCompleteGame = () => {
    setCompletado(true);
    //deblock.leccionID.map((id) => console.log(id) /*desbloquearLeccion(id)*/);
    desbloquearLeccion(deblock.leccionID);
    desbloquearModoJuego(deblock.modeGameID);
    //deblock.modeGameID.map((id) => desbloquearModoJuego(id));

    desbloquearNiveles(deblock.levelID);
    axios.post(
      "http://localhost:3000/progreso",
      {
        niveles: deblock.levelID,
        lecciones: deblock.leccionID,
        modoJuego: deblock.modeGameID,
      },
      {
        withCredentials: true,
      }
    );
    //deblock.levelID.map((id) => desbloquearNiveles(id));
  };

  const reiniciarComponente = () => {
    setReset(!reset); // Cambia el valor de 'reset' para activar el useEffect
    setGameOver(false);
  };

  const gameOverShow = () => {
    setGameOver(true);
  };

  return (
    <div className="home-page">
      <NavBar></NavBar>
      <div className="cont-home">
        <ContTop></ContTop>
      </div>
      <GameCont
        contJuego={contenidoDelJuego}
        handleCompleteGame={handleCompleteGame}
        reset={reset}
        gameOver={gameOverShow}
      ></GameCont>
      <ButtonCont links={links} completado={completado}></ButtonCont>
      {<BotonReset gameOver={gameOver} onReset={reiniciarComponente} />}
    </div>
  );
}
