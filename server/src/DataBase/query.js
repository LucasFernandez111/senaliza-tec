const conexion = require("./db");
const color = require("colors");
const bcrypts = require("bcrypt");
const createUser = (newUser) => {
  conexion.query(
    "SELECT * FROM USERS WHERE email = ?",
    [newUser.email],
    (err, userData) => {
      if (userData.length > 0) {
        return {
          status: 409,
          error: "El correo electrónico ya está registrado.",
        };
      } else {
        conexion.query("INSERT INTO users SET ?", newUser, (err) => {
          if (err) {
            return {
              status: 400,
              message: "Error al almacenar Usuario",
            };
          }
          return;
        });
      }
    }
  );
};

const validateUser = async (userData) => {
  const validacion = new Promise((resolve, reject) => {
    conexion.query(
      "SELECT * FROM users WHERE email = ?",
      [userData.email],
      async (err, result) => {
        if (err) {
          console.error(err);
          return res
            .status(500)
            .json({ error: "Error en la consulta de la base de datos." });
        }

        if (
          result.length === 0 ||
          !(await bcrypts.compare(userData.password, result[0].password))
        ) {
          console.log("Credenciales incorrectas");
          return { error: "Credenciales incorrectas." };
        } else {
          console.log("Inicio de sesión exitoso");
          resolve({ user: result[0].user });
        }
      }
    );
  });

  return validacion;
};

module.exports = {
  createUser,
  validateUser,
};
