const { Router } = require("express");
const router = Router();
const authController = require("../controller/authController");
const isAuthenticated = require("../middleware/isAuthenticated");

//ROUTES
router.get("/datos", isAuthenticated, authController.authenticated);
router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/logout", authController.logout);
router.post("/progreso", authController.progreso);

module.exports = router;
