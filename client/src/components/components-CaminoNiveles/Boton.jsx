import React, { useContext, useEffect, useState } from "react";
import "animate.css";
import { nivel } from "../../Contenido/Niveles";
import { Link } from "react-router-dom";
import start from "../../assets/startOne.png";
import { UserContext } from "../../context/UserProvider";
import BlockIcon from "../../assets/BlockIcon.svg";

const BotonesLevels = () => {
  const [mostrarInfo, setMostrarInfo] = useState(false);
  const [infoId, setInfoId] = useState(0);
  const [informacion, setInformacion] = useState();
  const [link, setLink] = useState();
  const [levels, setLevels] = useState([]);
  const [animateBack, setAnimateBack] = useState("");
  const [animateIntro, setAnimateIntro] = useState("");
  const { nivelesDesbloqueados } = useContext(UserContext);

  useEffect(() => {
    setLevels(Array(nivel.length).fill(null));
  }, []);

  const handleClick = (descripcion, direccion, id, postInfo) => {
    if (infoId !== id) {
      if (postInfo === "rigth") {
        setAnimateIntro("animate__bounceInRight");
        setAnimateBack("animate__bounceOutLeft");
      }

      if (postInfo === "left") {
        setAnimateIntro("animate__bounceInLeft");
        setAnimateBack("animate__bounceOutRight");
      }

      setMostrarInfo(false);

      setTimeout(() => {
        setInfoId(id);
        setMostrarInfo(true);
        setInformacion(descripcion);
        setLink(direccion);
      }, 250);
    }
  };

  return (
    <>
      <div className="levels-path">
        <div className="path-cap-one">
          <div className="title-dif-one">
            <div className="conjunto">
              <div>
                <img src={start} className="start" alt="Una Estrella" />
              </div>
              <div className="sub-cont">
                <h1 className="title-one">Facil</h1>
              </div>
            </div>
          </div>
          {levels.map((e, index) => {
            const descripcion = nivel[index].descripcion;
            const direccion = nivel[index].link;
            const position = nivel[index].position;
            const cap = nivel[index].cap;
            const positionInfo = nivel[index].positionInfo;
            const id = nivel[index].id;
            const unlockLevel = nivelesDesbloqueados.includes(id);

            if (cap === 1) {
              return (
                <div className="btn-level-cont" key={id}>
                  <button
                    className={
                      unlockLevel
                        ? `btn-niveles ${position}`
                        : `btn-niveles ${position} block`
                    }
                    onClick={() => {
                      handleClick(descripcion, direccion, id, positionInfo);
                    }}
                  >
                    {!unlockLevel ? (
                      <object data={BlockIcon} className="block-icon">
                        {" "}
                      </object>
                    ) : (
                      index + 1
                    )}
                  </button>
                  {id === infoId && (
                    <div
                      className={`cont-info-level ${positionInfo} animate__animated ${
                        mostrarInfo && id === infoId
                          ? animateIntro
                          : animateBack
                      }`}
                    >
                      <p className="cont-p-level">{informacion}</p>
                      <Link
                        to={link}
                        className={`link-level ${
                          link.length === 0 ? "prox" : ""
                        }`}
                      >
                        Empezar
                      </Link>
                    </div>
                  )}
                </div>
              );
            }
          })}
        </div>
        <div className="path-cap-two">
          <div className="title-dif-two">
            <div className="conjunto">
              <div>
                <img src={start} className="start" alt="Dos Estrellas" />
                <img src={start} className="start" alt="Dos Estrellas" />
              </div>
              <div className="sub-cont">
                <h1 className="title-two">Medio</h1>
              </div>
            </div>
          </div>
          {levels.map((e, index) => {
            const descripcion = nivel[index].descripcion;
            const direccion = nivel[index].link;
            const position = nivel[index].position;
            const cap = nivel[index].cap;
            const positionInfo = nivel[index].positionInfo;
            const id = nivel[index].id;
            const unlockLevel = nivelesDesbloqueados.includes(id);

            if (cap === 2) {
              return (
                <div className="btn-level-cont" key={id}>
                  <button
                    className={
                      unlockLevel
                        ? `btn-niveles ${position}`
                        : `btn-niveles ${position} block`
                    }
                    onClick={() => {
                      handleClick(descripcion, direccion, id, positionInfo);
                    }}
                  >
                    {!unlockLevel ? (
                      <object data={BlockIcon} className="block-icon">
                        {" "}
                      </object>
                    ) : (
                      index + 1
                    )}
                  </button>
                  {id === infoId && (
                    <div
                      className={`cont-info-level ${positionInfo} animate__animated ${
                        mostrarInfo && id === infoId
                          ? animateIntro
                          : animateBack
                      }`}
                    >
                      <p className="cont-p-level">{informacion}</p>
                      <Link
                        to={link}
                        className={`link-level ${
                          link.length === 0 ? "prox" : ""
                        }`}
                      >
                        Empezar
                      </Link>
                    </div>
                  )}
                </div>
              );
            }
          })}
        </div>
        <div className="path-cap-tree">
          <div className="title-dif-tree">
            <div className="conjunto">
              <div>
                <img src={start} alt="Tres Estrellas" />
                <img src={start} alt="Tres Estrellas" />
                <img src={start} alt="Tres Estrellas" />
              </div>
              <div className="sub-cont">
                <h1 className="title-tree">Dificil</h1>
              </div>
            </div>
          </div>
          {levels.map((e, index) => {
            const descripcion = nivel[index].descripcion;
            const direccion = nivel[index].link;
            const position = nivel[index].position;
            const cap = nivel[index].cap;
            const positionInfo = nivel[index].positionInfo;
            const id = nivel[index].id;
            const unlockLevel = nivelesDesbloqueados.includes(id);

            if (cap === 3) {
              return (
                <div className="btn-level-cont" key={id}>
                  <button
                    className={
                      unlockLevel
                        ? `btn-niveles ${position}`
                        : `btn-niveles ${position} block`
                    }
                    onClick={() => {
                      handleClick(descripcion, direccion, id, positionInfo);
                    }}
                  >
                    {!unlockLevel ? (
                      <object data={BlockIcon} className="block-icon">
                        {" "}
                      </object>
                    ) : (
                      index + 1
                    )}
                  </button>
                  {id === infoId && (
                    <div
                      className={`cont-info-level ${positionInfo} animate__animated ${
                        mostrarInfo && id === infoId
                          ? animateIntro
                          : animateBack
                      }`}
                    >
                      <p className="cont-p-level">{informacion}</p>
                      <Link
                        to={link}
                        className={`link-level ${
                          link.length === 0 ? "prox" : ""
                        }`}
                      >
                        Empezar
                      </Link>
                    </div>
                  )}
                </div>
              );
            }
          })}
        </div>

        {/* {levels.map((e, index) => {
          const descripcion = nivel[index].descripcion;
          const direccion = nivel[index].link;
          const position = nivel[index].position;

          return (
            <button
              className={`btn-niveles ${position}`}
              onClick={() => {
                handleClick(descripcion, direccion);
              }}
              key={index}
            >
              {index + 1}
            </button>
          );
        })} */}
      </div>
    </>
  );
};

export default BotonesLevels;
