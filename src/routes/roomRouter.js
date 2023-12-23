const {
  createRoomHandler,
  deleteRoomHandler,
  getRoomHandler,
  joinRoomHandler,
} = require("../handlers/roomHandlers");

const roomRouter = require("express").Router();

roomRouter.get("/createRoom", (req, res) => {
  try {
    createRoomHandler(req.query.roomId);
    res.end("Room created successfully");
  } catch (err) {
    res.send(err.message);
    res.end();
  }
});

roomRouter.delete("/deleteRoom", (req, res) => {
  try {
    deleteRoomHandler(req.query.roomId);
  } catch (err) {
    res.send(err.message);
    res.end();
  }
  res.end("Room deleted successfully");
});
roomRouter.get("/joinRoom", (req, res) => {
  try {
    joinRoomHandler(req.query.roomId);
    res.end("Room joined successfully");
  } catch (err) {
    res.send(err.message);
    res.end();
  }
});

module.exports = roomRouter;
