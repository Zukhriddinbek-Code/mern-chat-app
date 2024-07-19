import express from "express";
import { Server } from "socket.io";
import http from "http";

export const app = express();

//socket connection
export const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    credentials: true,
  },
});

//socket running at http://localhost:8080/

io.on("connection", async (socket) => {
  console.log("user connected", socket.id);

  const token = socket.handshake.auth.token;
  //current user details
  console.log("token", token);

  //disconnect
  io.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});
