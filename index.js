require("express-async-errors");
const express = require("express");
const winston = require("winston");
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");
const compression = require("compression");

const app = express();

const keys = require("./Config/keys");
const user = require("./Routes/user");
const clas = require("./Routes/class");
const menu = require("./Routes/menu");
const table = require("./Routes/table");
const mealImage = require("./Controllers/Menu/addImage");
const classImage = require("./Controllers/Class/addImage");

app.get("/", async (req, res) => {
  res.send("Hello");
  console.log("Hi");
});

mongoose
  .connect(keys.mongoURI)
  .then(() => console.log("Connected to Smart Order DB"))
  .catch(err => console.log("Error while connecting DB", err));

const port = process.env.PORT || 1000;

const server = app.listen(port, () => {
  winston.info(`Listening on port ${port}`);
});

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(compression());
app.use("/Menu_Image", express.static("Menu_Image"));
app.use("/Class_Image", express.static("Class_Image"));
app.use("/api/user", user);
app.use("/api/class", clas);
app.use("/api/menu", menu);
app.use("/api/table", table);
app.use("/api/menu", mealImage);
app.use("/api/class", classImage);

module.exports = server;
