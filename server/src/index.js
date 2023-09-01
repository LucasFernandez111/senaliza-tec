const express = require("express");
const { color } = require("colors");

const app = express();
require("dotenv").config({ path: "./env/.env" });
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routers/router"));

app.listen(PORT, () => {
  console.log(`SERVER ONLINE PORT : ${PORT} `.bgBlack);
});
