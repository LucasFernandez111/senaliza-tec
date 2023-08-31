import React from "react";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  //   const handleInput = (event) => {
  //     setValues((prev) => ({
  //       ...prev,
  //       [event.target.name]: [event.target.value],
  //     }));
  //   };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     axios
  //       .post("http://localhost:3000/register", values)
  //       .then((res) => console.log(res))
  //       .then((err) => console.log(err));
  //   };

  return (
    <div>
      <h1>LOGIN</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Correo:</label>
        <input type="email" onChange={handleInput} />

        <label htmlFor="">Password:</label>
        <input type="password" onChange={handleInput} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
