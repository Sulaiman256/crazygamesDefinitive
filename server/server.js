const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar CORS
app.use(cors());

const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Servidor Express listening on port ${port}`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
