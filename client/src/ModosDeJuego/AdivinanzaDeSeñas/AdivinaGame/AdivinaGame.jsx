import { useContext, useEffect, useState } from "react";
import ContOptions from "../ContOptions/ContOptions";
import ImagenAdivinaGame from "../Imagen/ImagenAdivinaGame";
import "./AdivinaGame.css";
import { UserContext } from "../../../context/UserProvider";

export default function AdivinaGame({
  contenido,
  gameComplete,
  reset,
  gameOver,
}) {
  const [options, setOptions] = useState([]);
  const [objetoImage, setObjetoImage] = useState({});
  const [juegoTerminado, setJuegoTerminado] = useState(false);

  const imgRandom = Math.floor(Math.random() * 4);

  const { desbloquearNiveles } = useContext(UserContext);

  useEffect(() => {
    const listOptionCopy = arrayRevuelto([...contenido.options]);
    const objetoImageCopy = contenido.img[imgRandom];
    setOptions(
      listOptionCopy.map((option, i) => ({
        index: i,
        name: option,
        clicket: false,
        result: null,
      }))
    );
    setObjetoImage(objetoImageCopy);
    setJuegoTerminado(false);
  }, [reset]);

  const arrayRevuelto = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const handleClick = (option) => {
    let optionsCopy = [...options];

    if (objetoImage.name !== option.name) {
      const optionCopy = { ...option, clicket: true, result: false };
      optionsCopy.splice(option.index, 1, optionCopy);
      gameOver();
    } else {
      const optionCopy = { ...option, clicket: true, result: true };
      optionsCopy.splice(option.index, 1, optionCopy);
      gameComplete();
    }
    setOptions(optionsCopy);
    setJuegoTerminado(true);
  };

  useEffect(() => {
    if (juegoTerminado) {
      desbloquearNiveles(2);
    }
  }, [juegoTerminado]);
  return (
    <div className="cont-advina-game">
      <ImagenAdivinaGame img={objetoImage}></ImagenAdivinaGame>

      <ContOptions
        options={options}
        juegoTerminado={juegoTerminado}
        handleClick={handleClick}
      ></ContOptions>
    </div>
  );
}
