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
    console.log("Search results yeah:", result);
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

module.exports = {
  getAllProductos,
  searchProductos,
};
