const users = require("../models/userModel");

const addUserHandler = (username) => {
  if (!users.has(username)) {
    users.add(username);
  } else {
    throw new Error("User with that username already exists");
  }
};

const deleteUserHandler = (username) => {
  users.delete(username);
};

module.exports = { addUserHandler };
