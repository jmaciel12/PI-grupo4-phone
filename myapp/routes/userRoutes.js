const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");


router.get("/login", userController.login);
router.get("/register", userController.register);
router.post("/register", userController.Register);
router.get("/profile", userController.profile);

// esta es para el login
router.post("/login", userController.processLogin);
router.get('/logout', userController.logout);

module.exports = router;
