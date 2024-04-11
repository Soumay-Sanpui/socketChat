const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const http = require('http');
const cors = require("cors");
const { Server } = require('socket.io');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log(`user with id ${socket.id} connected.`);

  socket.on("join_room", (room_id)=> {
    socket.join(room_id)
    console.log(`Username with id: ${socket.id} join room with id: ${room_id}.`)
  })

  socket.on("send_message",(message)=> {
    console.log(message);
    socket.to(message.room).emit("receive_message",message);
  })

  socket.on('disconnect',() => {
    console.log(`user with id ${socket.id} disconnected.`)
  })
})

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}.`);
})
