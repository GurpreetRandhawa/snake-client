const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function(playerName) {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.on("connect", () => {
    console.log("Successfully connected to the game server");
    conn.write(`Name: ${playerName}`);
  });
  conn.on("data", (data) => {
    console.log(data);
  });
  conn.setEncoding("utf-8");

  return conn;
};
module.exports = { connect };
