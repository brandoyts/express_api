require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./config/database");

const PORT = process.env.APP_PORT || 8000;

// *CONNECT TO THE DATABASE
db.connect();

app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`);
});
