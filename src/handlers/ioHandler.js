const users = require("../models/userModel");

const ioHandler = (io) => {
  io.on("connection", (socket) => {
    const username = socket.handshake.query?.username || null;
    const roomId = socket.handshake.query?.roomId || null;
    socket.join(roomId);
    socket.on("message", (data) => {
      io.to(roomId).emit("message", data);
    });
    socket.on("disconnect", () => {
      users.delete(username);
    });
  });
};

module.exports = ioHandler;
