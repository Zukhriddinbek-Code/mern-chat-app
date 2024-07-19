import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./config/connectDB.js";
import authRoutes from "./routes/auth.js";
import { app, server } from "./socket/index.js";

// const app = express();
dotenv.config();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({ message: "App running on 8080" });
});

//api endpoints
app.use("/auth", authRoutes);

connectDB()
  .then((response) => {
    server.listen(PORT, () => {
      console.log("App running on 8080");
    });
  })
  .catch((error) => {
    console.log(error);
  });
