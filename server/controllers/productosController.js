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

module.exports = {
  getAllProductos,
};
