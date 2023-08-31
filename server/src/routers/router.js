const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

//ROUTES
router.post("/login", () => {});
router.post("/register", authController.register);

module.exports = router;
