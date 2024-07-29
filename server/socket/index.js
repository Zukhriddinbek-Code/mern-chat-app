import express from "express";
import { Server } from "socket.io";
import http from "http";
import userDetailsToken from "../helper/userDetailsToken.js";

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

//online user?
const onlineUser = new Set();

io.on("connection", async (socket) => {
  console.log("user connected", socket.id);

  const token = socket.handshake.auth.token;
  //current user details
  const user = await userDetailsToken(token);

  //create a room for a user
  socket.join(user?._id);
  onlineUser.add(user._id);

  //sending data to client side
  io.emit("onlineUser", Array.from(onlineUser));

  //disconnecß
  io.on("disconnect", () => {
    onlineUser.delete(user?._id);
    console.log("user disconnected", socket.id);
  });
});
