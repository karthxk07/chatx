var username = null;
var roomId = null;
document
  .getElementById("usernameForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    await axios
      .get("http://localhost:3030/user/addUser", {
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
        alert(err.response.data);
      });
  });
document
  .getElementById("createRoomButton")
  ?.addEventListener("click", async (e) => {
    await axios
      .get("http://localhost:3030/room/createRoom", {
        params: {
          roomId: document.getElementById("roomForm").children[1].value,
        },
      })
      .then((res) => {
        roomId = document.getElementById("roomForm").children[1].value;
        document.getElementById("roomForm").style.display = "none";
      })
      .catch((err) => {
        alert(err.response.data);
      });
    console.log(roomId);
    console.log(username);
  });

document
  .getElementById("joinRoomButton")
  ?.addEventListener("click", async (e) => {
    await axios
      .get("http://localhost:3030/room/joinRoom", {
        params: {
          roomId: document.getElementById("roomForm").children[1].value,
        },
      })

      .then((res) => {
        document.getElementById("roomForm").style.display = "none";
        roomId = document.getElementById("roomForm").children[1].value;
      })
      .catch((err) => {
        alert(err.response.data);
      });
    console.log(roomId);
    console.log(username);
  });
