import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style/Register.css";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { LiaUserSolid } from "react-icons/lia";
import { FaRegCopyright } from "react-icons/fa";

const Register = () => {
  const { registro } = useContext(UserContext);
  const navigate = useNavigate();
  const [errorLength, setErrorLength] = useState(false);
  const [error, setError] = useState(false);
  const [values, setValues] = useState({
    user: "",
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (values.user.length > 11) {
      setErrorLength(true);
    } else {
      try {
        const respuesta = await axios.post(
          "http://localhost:3000/register",
          values
        );
        navigate("/login");
        registro(true);
      } catch (error) {
        setError(true);
      }
    }
  };
  return (
    <div className="container2">
      <form action="" onSubmit={handleSubmit}>
        <div className="title-login">
          <h1 className="ingresar-login">Crear tu cuenta</h1>
        </div>
        <div className="box-form">
          <div>
            <div class="group">
              <div
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "11px",
                  opacity: "0.50 ",
                }}
              >
                <LiaUserSolid />
              </div>
              <input
                type="text"
                name="user"
                placeholder="Username"
                onChange={handleInput}
                required
                className="input"
              />
            </div>
          </div>
          <div>
            <div class="group">
              <div
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "11px",
                  opacity: "0.50 ",
                }}
              >
                <MdAlternateEmail />
              </div>
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
            <div class="group">
              <div
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "11px",
                  opacity: "0.50",
                }}
              >
                <RiLockPasswordLine />
              </div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleInput}
                required
                className="input"
              />
            </div>
          </div>
        </div>
        {errorLength && (
          <div className="box-error">
            <h1 className="error-register">Usuario demasiado largo</h1>
          </div>
        )}
        {error && (
          <div className="box-error">
            <h1 className="error-register">CORREO YA EXISTENTE</h1>
          </div>
        )}

        <input type="submit" className="submit-register" id="submit" />
        <div>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="button-cuenta"
          >
            YA TENGO CUENTA
          </button>
        </div>

        <div className="temrminos-form">
          <div className="box-terminos">
            <span>
              Al registrarse en SeñalizaTec, aceptas nuestros <br />{" "}
              <b>Términos</b> y<b> Política</b> de privacidad
            </span>
          </div>
          <div className="box-copyright">
            <FaRegCopyright />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
