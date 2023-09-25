import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserProvider";
import "animate.css";
import { Link } from "react-router-dom";
import BlockIcon from "../../assets/BlockIcon.svg";

export default function PathCap({ seccion }) {
  const { nivelesDesbloqueados } = useContext(UserContext);
  const [mostrarInfo, setMostrarInfo] = useState(false);
  const [infoId, setInfoId] = useState(0);
  const [informacion, setInformacion] = useState();
  const [link, setLink] = useState();
  const [animateBack, setAnimateBack] = useState("");
  const [animateIntro, setAnimateIntro] = useState("");
  const [title, setTitle] = useState("");
  const [href, setHref] = useState("");
  const [dificult, setDificult] = useState([]);

  useEffect(() => {
    setTitle(seccion.titulo);
    setHref(seccion.href);
    setDificult(seccion.dificultad);
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
    <div id={href}>
      <h1 className="title-seccion">{title}</h1>
      {dificult.map((e, i) => {
        const { title, levels } = e;
        return (
          <div className="path-cap" key={i}>
            <div className="title-dif">
              <h1 className="title">{title}</h1>
            </div>
            {levels.map((e, index) => {
              const descripcion = e.descripcion;
              const direccion = e.link;
              const position = e.position;
              const positionInfo = e.positionInfo;
              const id = e.id;
              const unlockLevel = nivelesDesbloqueados.includes(id);

              return (
                <div className={`btn-level-cont-${position}`} key={id}>
                  <button
                    className={
                      unlockLevel
                        ? `btn-niveles-${position}`
                        : `btn-niveles-${position} block`
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
            })}
          </div>
        );
      })}
    </div>
  );
}
