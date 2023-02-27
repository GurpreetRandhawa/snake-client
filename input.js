let connection;
const {
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGTH_KEY,
  msgKey,
} = require("./constants");
const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  } else if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  } else if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  } else if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  } else if (key === MOVE_RIGTH_KEY) {
    connection.write("Move: right");
  }
  // checking if key pressed is same as key assigned for message
  else if (key === Object.keys(msgKey)[0]) {
    connection.write(`Say: ${msgKey[Object.keys(msgKey)[0]]}`);
  }
};
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
module.exports = { setupInput };
