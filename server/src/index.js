const express = require("express");
const { color } = require("colors");
const cors = require("cors");
require("dotenv").config({ path: "./env/.env" });
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;

app.use("/", require("./routers/router"));

app.listen(PORT, () => {
  console.log(`SERVER ONLINE PORT : ${PORT} `.bgBlack);
});
