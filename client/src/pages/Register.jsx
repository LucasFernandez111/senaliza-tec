import React, { useEffect } from "react";
import { useState } from "react";

import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usuario, setUsuario] = useState("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    console.log(values);
  }, [values]);

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/register", values)
      .then((res) => console.log(res))
      .then((err) => console.log(err));
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Cuenta Usurio:</label>
        <input type="text" name="name" onChange={handleInput} />

        <label htmlFor="">Correo:</label>
        <input type="email" name="email" onChange={handleInput} />

        <label htmlFor="">Password:</label>
        <input type="password" name="password" onChange={handleInput} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
