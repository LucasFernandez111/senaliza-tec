const conexion = require("../DataBase/db");
const queries = require("../DataBase/query");
const bcrypts = require("bcrypt");
const { addHash } = require("./hashing");

exports.register = async (req, res) => {
  const { body } = req;

  if (!body.user || !body.email || !body.password) {
    return res.status(400).json({
      status: "FAILED",
      data: { error: "Uno de los campos estas vacio" },
    });
  }
  const userData = await addHash(body);

  try {
    queries.createUser(userData);
    res
      .status(200)
      .send({ status: "OK", message: "Se ha registrado correctamente" });
  } catch (error) {
    res
      .status(300)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

exports.login = async (req, res) => {
  const { body } = req;

  if (!body.email || !body.password) {
    return res.status(400).json({
      status: "FAILED",
      data: { error: "Uno de los campos estas vacio" },
    });
  }

  const result = await queries.validateUser(body);

  console.log(result);
  res.status(200).send({ status: "OK", data: result });
};

exports.progreso = async (req, res) => {
  const niveles = req.body[0];
  const userActual = req.body[1];
  const progreso = JSON.stringify({ niveles: niveles });

  conexion.query(
    "UPDATE users SET progreso = ? WHERE user = ?",
    [progreso, userActual],
    (err) => {
      if (err) {
        console.log("FALLO AL ENVIAR");
        console.error(err);
        res.status(500).json({ mensaje: "Error al actualizar el progreso" });
      } else {
        console.log("Envío exitoso");
        res.status(200).json({ mensaje: "Progreso actualizado correctamente" });
      }
    }
  );

  console.log(
    `Actualizando progreso para el usuario ${userActual} a ${niveles}`
  );
};
