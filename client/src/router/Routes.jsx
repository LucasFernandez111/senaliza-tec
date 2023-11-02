import { Routes, Route, useParams, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import HomeDemo from "./../pages/HomeDemo";
import EndPage from "../pages/EndPage";
import HomePage from "./../pages/HomePage";
import Abecedario from "../pages/abecedario";
import Register from "../pages/Register";
import Login from "../pages/Login";
import LeccionPage from "../pages/LeccionPage";
import PractPage from "./../pages/PractPage";
import JuegoOrdenamiento from "../ModosDeJuego/JuegoOrdenamiento/JuegoOrdenamiento";
import FlechasGame from "../ModosDeJuego/FlechasGame/FlechasGame";
import GenerateNameSign from "../pages/GenerateNameSign";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HomeDemo />}></Route>
      <Route path="/home" element={<HomePage></HomePage>}></Route>
      <Route path="/leccion/:id" element={<LeccionPageWrapper />}></Route>
      <Route path="/mododejuego/:id" element={<PractPageWrapper />}></Route>
      <Route path="/tutorial/:id" element={<LeccionPageWrapper />}></Route>
      <Route path="/mododejuegoprueba/:id" element={<PractPage />}></Route>
      <Route path="/mododejuegoprueb" element={<FlechasGame />}></Route>
      <Route path="/finaldemo" element={<EndPage />}></Route>
      <Route path="/abclib" element={<Abecedario></Abecedario>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/gameOrdenamiento" element={<JuegoOrdenamiento />}></Route>
      <Route path="/signName" element={<GenerateNameSign />}></Route>
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
