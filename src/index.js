require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const socketHandler = require("./handlers/socketHandler");
const roomRouter = require("./routes/roomRouter");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(bodyParser.json());
app.use("/room", roomRouter);

app.get("/", (req, res) => {
  console.log("req");
  res.end();
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socketHandler(socket);
});

server.listen(process.env.PORT, () => {
  console.log("server running at PORT : " + process.env.PORT);
});
