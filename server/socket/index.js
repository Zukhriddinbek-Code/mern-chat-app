import express from "express";
import { Server } from "socket.io";
import { http } from "http";

export const app = express();

//socket connection
export const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("user disconnected", socket.id);

  //disconnect
  io.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});
