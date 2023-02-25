const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: "50541",
  });
  conn.on("connect", () => {
    console.log("Successfully connected to the game server");
    conn.write("Name: GPS");
  });
  conn.on("data", (data) => {
    console.log(data);
  });
  conn.setEncoding("utf-8");

  return conn;
};
module.exports = { connect };
