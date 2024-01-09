const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// rutas
const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Servidor Express listening on port ${port}`);
});
