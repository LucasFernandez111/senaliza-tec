import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [registerExitoso, setRegister] = useState(false);

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

  //Create user useState Local Storage

  const [dataUser, setDataUser] = useState({
    userName: null,
    unlockedLevels: null,
  });

  const [nivelesDesbloqueados, setNivelesDesbloqueados] = useState(() => {
    const storedNivelesDesbloqueados = localStorage.getItem(
      "nivelesDesbloqueados"
    );
    return storedNivelesDesbloqueados
      ? JSON.parse(storedNivelesDesbloqueados)
      : [0];
  });

  const [nameUser, setNameUser] = useState(() => {
    const storedUserName = localStorage.getItem("userName");

    return storedUserName ? JSON.parse(storedUserName) : "";
  });

  //Set and create in Local Storage
  useEffect(() => {
    localStorage.setItem("userName", JSON.stringify(nameUser)), [nameUser];
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

  const registro = (validacion) => {
    setRegister(validacion);
  };

  const desbloquearLeccion = (ids) => {
    if (!ids) return;
    setLeccionesDesbloqueadas(leccionesDesbloqueadas.concat(ids));
  };

  const desbloquearModoJuego = (ids) => {
    if (!ids) return;
    setModosJuegoDesbloqueados(modosJuegoDesbloqueados.concat(ids));
  };

  const incrementarBarra = () => setBarraDeProgreso(barraDeProgreso + 12);

  const desincrementarBarra = () => setBarraDeProgreso(barraDeProgreso - 12);

  const addData = (newData) => {
    setDataUser((prev) => ({
      ...prev,
      unlockedLevels: newData.nivel,
      userName: newData.user,
    }));
  }; //Add data of users to state dataUser

  const desbloquearNiveles = (nivel) => {
    if (nivelesDesbloqueados.includes(nivel)) {
      return;
    }

    setNivelesDesbloqueados(nivelesDesbloqueados.concat(nivel));
  };

  const insertUserName = (user) => {
    setNameUser(user.toUpperCase());
  };

  const reset = () => {
    setNameUser([]);
    setBarraDeProgreso(12);
    setLeccionesDesbloqueadas([0, 1]);
    setModosJuegoDesbloqueados([0]);
    setNivelesDesbloqueados([0]);
  };

  const resetBarr = () => {
    setBarraDeProgreso(12);
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
    resetBarr,
    insertUserName,
    nameUser,
    registro,
    registerExitoso,
    addData,
    dataUser,
  };

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserProvider };
