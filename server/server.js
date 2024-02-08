const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar CORS
app.use(cors());

const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

// Configurar Socket.IO
io.on("connection", (socket) => {
  console.log("Usuario conectado");

  // Evento para manejar la desconexión de un usuario
  socket.on("disconnect", () => {
    console.log("Usuario desconectado");
  });
});
let activeUsers = 0;

io.on("connection", (socket) => {
  console.log("Usuario conectado");
  activeUsers++;

  // Enviar la cantidad de usuarios activos a todos los clientes
  io.emit("activeUsers", activeUsers);

  socket.on("disconnect", () => {
    console.log("Usuario desconectado");
    activeUsers--;

    // Actualizar la cantidad de usuarios activos después de la desconexión
    io.emit("activeUsers", activeUsers);
  });
});

app.listen(port, () => {
  console.log(`Servidor Express listening on port ${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
