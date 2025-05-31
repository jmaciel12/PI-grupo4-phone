const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

function authMiddleware(req, res, next) {
  if (!req.session.user) {
    return res.redirect('/user/login');
  }
  next();
}

router.get("/add", authMiddleware, productController.add);
router.get("/detalle/:id", productController.detail);
router.get("/search", productController.search);
router.post("/add", authMiddleware, productController.addProduct);

module.exports = router;