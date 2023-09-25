const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

//ROUTES

router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/progreso", authController.progreso);

module.exports = router;
