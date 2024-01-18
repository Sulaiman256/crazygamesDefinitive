const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");
router.get("/productos", productosController.getAllProductos);
router.get("/productos/search", productosController.searchProductos);
module.exports = router;
