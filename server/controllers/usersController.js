const db = require("../db");

const registerUsers = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ error: "Por favor proporciona todos tus datos." });
    }

    // Utilizar el método db.none para consultas de inserción
    await db.none(
      "INSERT INTO users (name, email, password) VALUES($1, $2, $3)",
      [name, email, password]
    );

    res.json({ success: true, message: "Usuario registrado exitosamente" });
  } catch (error) {
    console.error("Error al insertar usuario", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
const loginUsers = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: "Por favor, proporciona tu correo electrónico y contraseña.",
      });
    }

    const user = await db.oneOrNone(
      "SELECT * FROM users WHERE email = $1 AND password = $2",
      [email, password]
    );

    if (!user) {
      return res.status(401).json({ error: "Credenciales incorrectas." });
    }

    res.json({ success: true, user: user });
  } catch (error) {
    console.error("Error al intentar iniciar sesión", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  registerUsers,
  loginUsers,
};
