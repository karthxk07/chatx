const rooms = require("../models/roomModel");

const createRoomHandler = (roomId) => {
  if (rooms.has(roomId)) {
    throw new Error("A room with the ID already exists");
  } else {
    rooms.add(roomId);
  }
  console.log(rooms);
};
const deleteRoomHandler = (roomId) => {
  if (!rooms.has(roomId)) {
    throw new Error("No such room exist");
  } else {
    rooms.delete(roomId);
  }
  console.log(rooms);
};
const joinRoomHandler = (roomId) => {
  if (!rooms.has(roomId)) {
    throw new Error("No such room exist");
  }
  console.log(rooms);
};

module.exports = { createRoomHandler, deleteRoomHandler, joinRoomHandler };
