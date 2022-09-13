const { keys } = require('./constants');
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key in keys) {
    connection.write(keys[key]);
  }
};
  



module.exports = { setupInput };