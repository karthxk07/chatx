const ioHandler = (io) => {
  io.on("connection", (socket) => {
    const roomId = socket.handshake.query.roomId;
    socket.join(roomId);
    socket.on("message", (data) => {
      io.to(roomId).emit("message", data);
    });
  });
};

module.exports = ioHandler;
