const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");
const usersController = require("../controllers/usersController");
router.get("/productos", productosController.getAllProductos);
router.get("/productos/search", productosController.searchProductos);

router.post("/users", usersController.registerUsers);
router.post("/users/login", usersController.loginUsers);
module.exports = router;
