const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/connectDB");

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({ message: "App running on 8080" });
});

connectDB()
  .then((response) => {
    app.listen(PORT, () => {
      console.log("App running on 8080");
    });
  })
  .catch((error) => {
    console.log(error);
  });
