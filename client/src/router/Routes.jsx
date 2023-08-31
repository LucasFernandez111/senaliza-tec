import { Routes, Route, useParams, Navigate } from "react-router-dom";
import LeccionPage from "../pages/LeccionPage";
import PractPage from "./../pages/PractPage";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import HomeDemo from "./../pages/HomeDemo";
import EndPage from "../pages/EndPage";
import CaminoNiveles from "../pages/CaminoNiveles";
import HomePage from "./../pages/HomePage";
import Abecedario from "../pages/abecedario";
import Register from "../pages/Register";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HomeDemo />}></Route>
      <Route path="/home" element={<HomePage></HomePage>}></Route>
      <Route path="/leccion/:id" element={<LeccionPageWrapper />}></Route>
      <Route path="/mododejuego/:id" element={<PractPageWrapper />}></Route>
      <Route path="/finaldemo" element={<EndPage />}></Route>
      <Route path="/Niveles" element={<CaminoNiveles />}></Route>
      <Route path="/abclib" element={<Abecedario></Abecedario>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
    </Routes>
  );
}

const LeccionPageWrapper = () => {
  const { id } = useParams();
  const { leccionesDesbloqueadas } = useContext(UserContext);
  const leccionId = parseInt(id);

  const tieneAcceso = leccionesDesbloqueadas.includes(leccionId);

  return tieneAcceso ? <LeccionPage /> : <Navigate to="/" replace />;
};

const PractPageWrapper = () => {
  const { id } = useParams();
  const { modosJuegoDesbloqueados } = useContext(UserContext);
  const modoJuegoId = parseInt(id);

  const tieneAcceso = modosJuegoDesbloqueados.includes(modoJuegoId);

  return tieneAcceso ? <PractPage /> : <Navigate to="/" replace />;
};
