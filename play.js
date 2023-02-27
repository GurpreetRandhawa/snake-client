const { connect } = require("./client");
const playerName = process.argv.slice(2);
const { setupInput } = require("./input");
console.log("Connecting ...");
let x = connect(playerName);

setupInput(x);
