const db = require("../db");

const searchProductos = async (req, res) => {
  try {
    const searchTerm = req.query.q;
    console.log("Search term:", searchTerm);

    const result = await db.any("SELECT * FROM productos WHERE name ILIKE $1", [
      `%${searchTerm}%`,
    ]);

    console.log("Search results:", result);

    res.json(result);
  } catch (error) {
    console.error("Error en la búsqueda:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  searchProductos,
};
