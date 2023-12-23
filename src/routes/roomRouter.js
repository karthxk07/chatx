const {
  createRoomHandler,
  deleteRoomHandler,
} = require("../handlers/roomHandlers");

const roomRouter = require("express").Router();

roomRouter.get("/createRoom", (req, res) => {
  createRoomHandler(req.query.roomId);
  res.end("Room created successfully");
});

roomRouter.delete("/deleteRoom", (req, res) => {
  deleteRoomHandler(req.query.roomId);
  res.end("Room deleted successfully");
});

module.exports = roomRouter;
