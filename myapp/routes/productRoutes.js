const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/add", productController.add);
router.get("/detalle", productController.detail);
router.get("/search", productController.search);

module.exports = router;