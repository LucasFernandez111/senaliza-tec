import React, { useContext, useEffect } from "react";
import NavBar from "../components/components-pract-page/NavBar";
import HomeCont from "../components/components-home-page/HomeCont";
import "animate.css";
import { UserContext } from "../context/UserProvider";
import { useGet } from "../hooks/useFetch";
import UnAuthenticated from "../components/unAuthenticated/unAuthenticated";
import { useState } from "react";

import { BASE_URL_DATA } from "../APIS/apisURL";
export default function HomePage() {
  const {
    resetBarr,
    insertUserName,
    desbloquearNiveles,
    desbloquearLeccion,
    desbloquearModoJuego,
    addData,
  } = useContext(UserContext);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { data, error } = useGet(BASE_URL_DATA);

  useEffect(() => {
    resetBarr();
  }, [resetBarr]);

  const verifyAuthenticated = () => {
    insertUserName(data.data.user);
    addData(data.data);
    const levelsUnlocked = JSON.parse(data.data.nivel);
    const lessonsUnlocked = JSON.parse(data.data.lecciones);
    const modeGameUnlocked = JSON.parse(data.data.modoJuego);

    desbloquearNiveles(levelsUnlocked);
    desbloquearLeccion(lessonsUnlocked);
    desbloquearModoJuego(modeGameUnlocked);

    setIsAuthenticated(true);
    return;
  };

  useEffect(() => {
    if (data) verifyAuthenticated();
  }, [data]);

  return (
    <div style={{ background: "rgba(19, 19, 19, 0.9)" }}>
      {isAuthenticated && (
        <div className="home-page animate__animated animate__fadeIn">
          <NavBar />

          <HomeCont />
        </div>
      )}
      {error && <UnAuthenticated />}
    </div>
  );
}
