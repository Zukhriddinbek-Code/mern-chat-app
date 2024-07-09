import express from "express";
import { Server } from "socket.io";
import { http } from "http";

const app = express();

//socket connection
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    credentials: true,
  },
});

io.on();
