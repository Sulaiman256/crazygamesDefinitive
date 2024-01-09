const db = require("../db"); // Importa la configuración de la conexión a PostgreSQL

const getAllProductos = async (req, res) => {
  try {
    const result = await db.any("SELECT * FROM productos");
    res.json(result);
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  getAllProductos,
};
