import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

//Register

//

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

    return storedUserName ? JSON.parse(storedUserName) : [];
  });

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
    setLeccionesDesbloqueadas(leccionesDesbloqueadas.concat(ids));
  };

  const desbloquearModoJuego = (ids) => {
    setModosJuegoDesbloqueados(modosJuegoDesbloqueados.concat(ids));
  };

  const incrementarBarra = () => {
    setBarraDeProgreso(barraDeProgreso + 12);
  };

  const desincrementarBarra = () => {
    setBarraDeProgreso(barraDeProgreso - 12);
  };

  const desbloquearNiveles = async (nivel, user) => {
    setNivelesDesbloqueados(nivelesDesbloqueados.concat(nivel));
    console.log(user);
    const progreso = { nivel: nivel, user: user };
    try {
      const respuesta = await axios.post("http://localhost:3000/progreso", [
        nivel,
        user,
      ]);
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  const insertUserName = (user) => {
    setNameUser([user]);
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
  };

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserProvider };
