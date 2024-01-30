const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");
const usersController = require("../controllers/usersController");
const coverController = require("../controllers/coverController");
router.get("/productos", productosController.getAllProductos);
router.get("/productos/search", productosController.searchProductos);
router.get("/cover/:productId", coverController.getCoverByProductId);
router.get("/productos/:productId", productosController.getProductDetails); // Nueva ruta para detalles de productos
router.get("/productos/:id/features", productosController.getGameFeatures); // Nueva ruta para obtener características del juego
router.get("/productos/:id/visuals", productosController.getGameVisuals); // Nueva ruta para obtener video e imágenes del juego
router.get(
  "/productos/:id/description",
  productosController.getGameDescription
); // Nueva ruta para obtener la descripción del juego
router.post("/users", usersController.registerUsers);
router.post("/users/login", usersController.loginUsers);
module.exports = router;
