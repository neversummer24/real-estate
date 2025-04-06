import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";

import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";
import { createServer } from "http";
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

server.listen(3000, () => {
  console.log("Server is running!");
});


const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    credentials: true,
  
  },
});

io.use((socket, next) => {
  const headersCookie = socket.handshake.headers.cookie;
  if (!headersCookie) {
    return next(new Error("Authentication error"));
  }
  const cookies = cookie.parse(headersCookie); 
  if (!cookies.token) {
    return next(new Error("Authentication error"));
  }
  
  const token = cookies.token; 

  if(!token){
    return next(new Error("Authentication error"));
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
    if (err) {
      return next(new Error("Authentication error"));
    }
    socket.userId = payload.userId;
    next();
  });
});

let users = {}; 

io.on("connection", (socket) => {
  socket.on("join", (userId) => {
    socket.join(userId); // 每个用户会加入一个名为 userId 的房间
    console.log(`${userId} joined the room`);
  });

  
  socket.on("sendMessage", ({receiverId, message }) => {
    io.to(receiverId).emit("getMessage", {
      message,
    });
  });


  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});




