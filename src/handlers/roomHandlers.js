const rooms = require("../models/roomModel");

const createRoomHandler = (roomId) => {
  rooms.set(roomId, []);
  console.log(rooms);
};
const deleteRoomHandler = (roomId) => {
  rooms.delete(roomId);
  console.log(rooms);
};
const getRoomHandler = (roomId) => {
  rooms.get(roomId);
  console.log(rooms);
};

module.exports = { createRoomHandler, deleteRoomHandler };
