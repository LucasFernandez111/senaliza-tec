const conexion = require("../DataBase/db");
const bcrypts = require("bcrypt");

exports.register = async (req, res) => {
  const body = req.body;
  const user = req.body.user;
  const email = req.body.email;
  const password = req.body.password;
  let passHash = await bcrypts.hash(password, 8);
  const userData = {
    user: user,
    email: email,
    password: passHash,
  };

  conexion.query("INSERT INTO users SET ?", userData, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(body);
    }
  });
};
