import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import "./style/login.css";
import checked from "../assets/checked.png";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import { usePost } from "../hooks/useFetch";
import { API_URL_LOGIN } from "../APIS/apisURL";

const Login = () => {
  const { registerExitoso, registro } = useContext(UserContext);
  const [salir, setSalir] = useState(false);
  const [alertError, setAlertError] = useState(false);
  const { postData } = usePost();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { status } = await postData(API_URL_LOGIN, values);

      if (status === 200) {
        navigate("/home");
      }
    } catch (error) {
      setAlertError(true);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setSalir(true);
      registro(false);
    }, 3000);
  }, [registerExitoso]);

  return (
    <div className="container2-login animate__animated">
      {registerExitoso && (
        <div
          className={
            "box-checked animate__animated " +
            (salir ? "animate__fadeOutDown" : "animate__fadeInDown")
          }
        >
          <div className="error">
            <div className="error__icon">
              <img className={"img-checked "} src={checked} alt="" />
            </div>
            <div className="error__title">Se ha registrado Correctamente</div>
          </div>
        </div>
      )}
      <form action="" onSubmit={handleSubmit}>
        <div className="title-register">
          <h1 className="ingresar-login">Ingresar</h1>
        </div>
        <div className="box-form">
          <div>
            <div className="group">
              <input
                required
                type="email"
                name="email"
                onChange={handleInput}
                className="input"
                placeholder="email"
              />
            </div>
          </div>
          <div>
            <div className="group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleInput}
                required
                className="input"
              />
            </div>

            {alertError && (
              <div className="box-error">
                <h1 className="error-register">
                  CONTRASEÑA O EMAIL INCORRECTOS
                </h1>
              </div>
            )}
          </div>
        </div>
        <div>
          <input
            type="submit"
            onClick={handleSubmit}
            className="submit-register"
            id="submit"
          />
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/register");
            }}
            className="button-cuenta"
          >
            REGISTRARSE
          </button>
        </div>
        <div className="box-terminos">
          <span>
            Al registrarse en SeñalizaTec, aceptas nuestros <br />{" "}
            <b>Términos</b> y<b> Política</b> de privacidad
          </span>
          <div className="box-copyright">
            <FaRegCopyright />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
