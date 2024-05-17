const express = require("express");

// Initialize Express
const app = express();
const fs = require("fs");
const path = require("path");
var cors = require("cors");

app.use(cors());

// Create GET request
app.get("/", (req, res) => {
  res.sendFile(path.normalize(__dirname + "/data.json"));
});

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app;
