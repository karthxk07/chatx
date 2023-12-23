const rooms = require("../models/roomModel");

const createRoomHandler = (roomId) => {
  if (rooms.has(roomId)) {
    throw new Error("A room with the ID already exists");
  } else {
    rooms.add(roomId);
  }
};
const deleteRoomHandler = (roomId) => {
  if (!rooms.has(roomId)) {
    throw new Error("No such room exist");
  } else {
    rooms.delete(roomId);
  }
};
const joinRoomHandler = (roomId) => {
  if (!rooms.has(roomId)) {
    throw new Error("No such room exist");
  }
};

module.exports = { createRoomHandler, deleteRoomHandler, joinRoomHandler };
