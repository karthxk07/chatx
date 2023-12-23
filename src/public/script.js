var username = null;
var roomId = null;
var socket = null;
document
  .getElementById("usernameForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    await axios
      .get("/user/addUser", {
        params: {
          username: e.target.username.value,
        },
      })
      .then(() => {
        username = e.target.username.value;
        document.getElementById("selectUsername").style.display = "none";
        document.getElementById("roomForm").style.display = "flex";
      })
      .catch((err) => {
        if (err) {
          alert(err.response.data);
        }
      });
  });
document
  .getElementById("createRoomButton")
  ?.addEventListener("click", async (e) => {
    await axios
      .get("/room/createRoom", {
        params: {
          roomId: document.getElementById("roomForm").children[1].value,
        },
      })
      .then((res) => {
        roomId = document.getElementById("roomForm").children[1].value;
        document.getElementById("roomForm").style.display = "none";
        document.getElementById("messageDiv").style.display = "flex";
        document.getElementById("roomIdText").innerHTML = roomId;
        socket = io({
          query: {
            username: username,
            roomId: roomId,
          },
        });
        initSocketEvents();
      })
      .catch((err) => {
        if (err) {
          alert(err.response.data);
        }
      });
  });

document
  .getElementById("joinRoomButton")
  ?.addEventListener("click", async (e) => {
    await axios
      .get("/room/joinRoom", {
        params: {
          roomId: document.getElementById("roomForm").children[1].value,
        },
      })
      .then((res) => {
        roomId = document.getElementById("roomForm").children[1].value;
        document.getElementById("roomForm").style.display = "none";
        document.getElementById("messageDiv").style.display = "flex";
        document.getElementById("roomIdText").innerHTML = roomId;

        socket = io({
          query: {
            username: username,
            roomId: roomId,
          },
        });
        initSocketEvents();
      })
      .catch((err) => {
        if (err) {
          alert(err.response.data);
        }
      });
  });
document.getElementById("messageForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let message = e.target.message.value;
  document.getElementById("message").value = "";
  if (message) {
    socket.emit("message", { username: username, message: message });
  }
});
const initSocketEvents = () => {
  socket.on("message", (data) => {
    const chatList = document.getElementById("chatList");
    const node = document.createElement("li");
    const textnode = document.createTextNode(
      data.username + " : " + data.message
    );
    node.appendChild(textnode);
    chatList.appendChild(node);
  });
};
