import React, { useContext, useEffect, useState } from "react";
import NavBar from "./../components/components-pract-page/NavBar";
import ContTop from "./../components/components-pract-page/ContTop";
import GameCont from "./../components/components-pract-page/GameCont";
import ButtonCont from "./../components/components-pract-page/ButtonCont";
import { useParams } from "react-router";
import { contGames } from "../Contenido/ContenidoGame";
import { UserContext } from "../context/UserProvider";
import BotonReset from "../ModosDeJuego/BotonReset/BotonReset";
export default function PractPage() {
  const { id } = useParams();
  const [links, setLinks] = useState({});
  const [completado, setCompletado] = useState(false);
  const [deblock, setDeblock] = useState({});
  const [contenidoDelJuego, setContenidoDelJuego] = useState({});
  const [reset, setReset] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const { desbloquearLeccion, desbloquearModoJuego } = useContext(UserContext);
 
  useEffect(() => {
    const contGame = contGames[id];
    setContenidoDelJuego(contGame);
    setLinks(contGame.link);
    setCompletado(false);
    setDeblock(contGame.desblock);
  }, [id]);

  const handleCompleteGame = () => {
    setCompletado(true);
    deblock.leccionID.forEach((id) => {
      id ? desbloquearLeccion(id) : "";
    });
    deblock.modeGameID.forEach((id) => {
      id ? desbloquearModoJuego(id) : "";
    });
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
