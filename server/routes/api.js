const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");
const searchController = require("../controllers/searchController");
router.get("/productos", productosController.getAllProductos);
router.get("/productos/search", searchController.searchProductos);
module.exports = router;
