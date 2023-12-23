require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const ioHandler = require("./handlers/ioHandler");
const roomRouter = require("./routes/roomRouter");
const path = require("node:path");
const userRouter = require("./routes/userRouter");

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(bodyParser.json());
app.use("/room", roomRouter);
app.use("/user", userRouter);
app.use(express.static(path.join(__dirname, "public")));
app.use("/", express.static(path.join(__dirname, "public/index.html")));

ioHandler(io);

server.listen(process.env.PORT, () => {
  console.log("server running at PORT : " + process.env.PORT);
});
