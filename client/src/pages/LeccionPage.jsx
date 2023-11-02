import React, { useEffect, useState } from "react";
import NavBar from "./../components/components-pract-page/NavBar";
import ContTop from "./../components/components-pract-page/ContTop";
import ButtonCont from "./../components/components-pract-page/ButtonCont";
import { useParams } from "react-router";
import { lecciones } from "./../Contenido/Lecciones";
import ContPrincipal from "../components/components-leccion-page/ContPrincipal";
import ContSecundario from "../components/components-leccion-page/ContSecundario";

export default function LeccionPage() {
  const { id } = useParams();
  const [titulo, setTitulo] = useState("");
  const [contPrincipal, setContPrincipal] = useState("");
  const [contSecundario, setContSecundario] = useState([]);
  const [links, setLinks] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(() => {
    const leccionCopia = lecciones[id];

    setTitulo(leccionCopia.titulo);
    setContPrincipal(leccionCopia.contenido.contPrincipal);
    setContSecundario(leccionCopia.contenido.contSecundario);
    setLinks(leccionCopia.link);
  }, [id]);

  useEffect(() => {
    setIsScrolled(false)
    setHasScroll(true)

    const container = document.getElementById("scroll-container");

    const handleScroll = () => {
      const isBottom =
        container.scrollHeight - 2 - container.scrollTop <=
        container.clientHeight;
      if (isBottom) {
        handeScrollTrue(isBottom);
      }
    };

    const checkScroll = () => {
      const containerHasScroll =
        container.scrollHeight > container.clientHeight;
      setHasScroll(containerHasScroll);
    };

    if (container && typeof container.addEventListener === "function") {
      container.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", checkScroll);
      setTimeout(checkScroll, 100);
    }

    return () => {
      if (container && typeof container.removeEventListener === "function") {
        container.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", checkScroll);
      }
    };
  }, [id]);

  const handeScrollTrue = (value) => {
    if (value && !isScrolled) {
      setIsScrolled(true);
    }
  };

  return (
    <div className="home-page">
      <NavBar></NavBar>
      <div className="cont-home">
        <ContTop></ContTop>
        <div className="leccion-cont" id="scroll-container">
          <h1>{titulo}</h1>
          <ContPrincipal text={contPrincipal}></ContPrincipal>
          <ContSecundario cont={contSecundario}></ContSecundario>
        </div>
        <ButtonCont
          links={links}
          completado={hasScroll ? isScrolled : true}
        ></ButtonCont>
      </div>
    </div>
  );
}
