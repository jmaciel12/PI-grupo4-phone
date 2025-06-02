const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");


router.get("/login", userController.login);
router.get("/register", userController.register);
router.post("/register", userController.Register);
router.get("/profile", userController.profile);
router.get("/profile/:id", userController.viewProfileById);


router.post("/login", userController.processLogin);

router.post('/logout', userController.logout);


module.exports = router;
