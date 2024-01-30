const db = require("../db");

const getAllProductos = async (req, res) => {
  try {
    const result = await db.any("SELECT * FROM productos");
    console.log(result); // Agrega esto para ver los resultados en la consola
    res.json(result);
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const searchProductos = async (req, res) => {
  try {
    const searchTerm = req.query.searchTerm;
    const result = await db.any("SELECT * FROM productos WHERE name ILIKE $1", [
      `%${searchTerm}%`,
    ]);
    console.log("Search results:", result);
    if (result.length === 0) {
      res.json({ message: "No se encontraron productos." });
    } else {
      res.json(result);
    }
  } catch (error) {
    console.error("Error en la búsqueda:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const getProductDetails = async (req, res) => {
  try {
    const productId = req.params.productId;
    const result = await db.one("SELECT * FROM productos WHERE id = $1", [
      productId,
    ]);
    res.json(result);
  } catch (error) {
    console.error("Error fetching product details:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
const getGameFeatures = async (req, res) => {
  try {
    const productId = req.params.id;

    // Realiza la consulta para obtener las características del juego
    const gameFeatures = await db.oneOrNone(
      `SELECT
        p.name AS productName,
        d.name AS developer,
        di.name AS distributor,
        g.name AS genre,
        fl.release_date AS releaseDate
      FROM productos p
      LEFT JOIN desarrolladores d ON p.desarrolladorid = d.id
      LEFT JOIN distribuidores di ON p.distribuidorid = di.id
      LEFT JOIN generos g ON p.generoid = g.id
      LEFT JOIN fechalanzamientos fl ON p.fechalanzamientoid = fl.id
      WHERE p.id = $1`,
      [productId]
    );

    if (!gameFeatures) {
      return res
        .status(404)
        .json({ error: "Características del juego no encontradas" });
    }

    res.json(gameFeatures);
  } catch (error) {
    console.error("Error al obtener características del juego:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const getGameVisuals = async (req, res) => {
  try {
    const productId = req.params.id;

    // Obtener el video (trailer) del juego
    const video = await db.oneOrNone(
      "SELECT video FROM video WHERE producto_id = $1",
      [productId]
    );

    // Obtener las imágenes del juego
    const images = await db.any(
      "SELECT imagem FROM imagenes WHERE producto_id = $1",
      [productId]
    );

    res.json({ video, images });
  } catch (error) {
    console.error("Error al obtener visuales del juego:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const getGameDescription = async (req, res) => {
  try {
    const productId = req.params.id;

    // Obtener la descripción del juego
    const description = await db.oneOrNone(
      "SELECT description FROM descriptions WHERE producto_id = $1",
      [productId]
    );

    res.json({ description });
  } catch (error) {
    console.error("Error al obtener descripción del juego:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  getAllProductos,
  searchProductos,
  getProductDetails,
  getGameFeatures,
  getGameVisuals,
  getGameDescription,
};
