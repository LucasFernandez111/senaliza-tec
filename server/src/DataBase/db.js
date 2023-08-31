const mysql = require("mysql2");

//CONEXION
const conexion = mysql.createConnection({
  host: "localhost",
  database: "senalizatec_db",
  user: "root",
  password: "rootadmin",
});

conexion.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Conectado MYSQL");
  }
});

module.exports = conexion;
