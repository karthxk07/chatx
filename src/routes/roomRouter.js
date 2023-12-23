const {
  createRoomHandler,
  deleteRoomHandler,
  joinRoomHandler,
} = require("../handlers/roomHandlers");

const roomRouter = require("express").Router();

roomRouter.get("/createRoom", (req, res) => {
  try {
    createRoomHandler(req.query.roomId);
    res.end("Room created successfully");
  } catch (err) {
    res.status(500).send(err.message);
    res.end();
  }
});

roomRouter.delete("/deleteRoom", (req, res) => {
  try {
    deleteRoomHandler(req.query.roomId);
    res.end("Room deleted successfully");
  } catch (err) {
    res.status(500).send(err.message);
    res.end();
  }
});
roomRouter.get("/joinRoom", (req, res) => {
  try {
    joinRoomHandler(req.query.roomId);
    res.end("Room joined successfully");
  } catch (err) {
    res.status(500).send(err.message);
    res.end();
  }
});

module.exports = roomRouter;
