const { addUserHandler } = require("../handlers/userHandler");

const userRouter = require("express").Router();

userRouter.get("/addUser", (req, res) => {
  const username = req.query.username;
  try {
    addUserHandler(username);
    res.end("User added successfully");
  } catch (err) {
    res.status(500).send(err.message);
    res.end();
  }
});

module.exports = userRouter;
