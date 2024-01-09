const pgp = require("pg-promise")();

const db = pgp({
  user: "postgres",
  host: "localhost",
  database: "crazygames",
  password: "APTItude01",
  port: 5432,
});

module.exports = db;
