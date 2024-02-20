const db = require("../db");

const getCoverByProductId = async (req, res) => {
  try {
    const productId = req.params.productId;
    const result = await db.one(
      "SELECT cover FROM cover WHERE producto_id = $1",
      [productId]
    );

    res.json(result);
  } catch (error) {
    console.error("Error fetching cover data:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  getCoverByProductId,
};
