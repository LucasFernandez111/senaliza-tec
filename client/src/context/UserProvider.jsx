import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [leccionesDesbloqueadas, setLeccionesDesbloqueadas] = useState(() => {
    const storedLecciones = localStorage.getItem("leccionesDesbloqueadas");
    return storedLecciones ? JSON.parse(storedLecciones) : [0, 1];
  });
  const [modosJuegoDesbloqueados, setModosJuegoDesbloqueados] = useState(() => {
    const storedModosJuegos = localStorage.getItem("modosJuegosDesbloqueados");
    return storedModosJuegos ? JSON.parse(storedModosJuegos) : [0];
  });

  const [barraDeProgreso, setBarraDeProgreso] = useState(() => {
    const storedBarraDeProgreso = sessionStorage.getItem("barraDeProgreso");
    return storedBarraDeProgreso ? JSON.parse(storedBarraDeProgreso) : 12;
  });

  const [nivelesDesbloqueados, setNivelesDesbloqueados] = useState(() => {
    const storedNivelesDesbloqueados = localStorage.getItem(
      "nivelesDesbloqueados"
    );
    return storedNivelesDesbloqueados
      ? JSON.parse(storedNivelesDesbloqueados)
      : [1];
  });

  useEffect(() => {
    localStorage.setItem(
      "nivelesDesbloqueados",
      JSON.stringify(nivelesDesbloqueados)
    );
  }, [nivelesDesbloqueados]);

  useEffect(() => {
    localStorage.setItem(
      "leccionesDesbloqueadas",
      JSON.stringify(leccionesDesbloqueadas)
    );
  }, [leccionesDesbloqueadas]);

  useEffect(() => {
    localStorage.setItem(
      "modosJuegosDesbloqueados",
      JSON.stringify(modosJuegoDesbloqueados)
    );
  }, [modosJuegoDesbloqueados]);

  useEffect(() => {
    sessionStorage.setItem("barraDeProgreso", JSON.stringify(barraDeProgreso));
  }, [barraDeProgreso]);

  const desbloquearLeccion = (id) => {
    setLeccionesDesbloqueadas([...leccionesDesbloqueadas, id]);
  };

  const desbloquearModoJuego = (id) => {
    setModosJuegoDesbloqueados([...modosJuegoDesbloqueados, id]);
  };

  const incrementarBarra = () => {
    setBarraDeProgreso(barraDeProgreso + 12);
  };

  const desincrementarBarra = () => {
    setBarraDeProgreso(barraDeProgreso - 12);
  };

  const desbloquearNiveles = (nivel) => {
    setNivelesDesbloqueados([...nivelesDesbloqueados, nivel]);
  };

  const reset = () => {
    setBarraDeProgreso(12);
    setLeccionesDesbloqueadas([0, 1]);
    setModosJuegoDesbloqueados([0]);
  };

  const userState = {
    leccionesDesbloqueadas,
    modosJuegoDesbloqueados,
    desbloquearLeccion,
    desbloquearModoJuego,
    incrementarBarra,
    desincrementarBarra,
    barraDeProgreso,
    nivelesDesbloqueados,
    desbloquearNiveles,
    reset,
  };

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserProvider };
