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
const handleUserInput = function(par) {
  if (par === '\u0003') {
    process.exit();
  }
  if (par in keys)
  connection.write(keys[par]);
};
  



module.exports = { setupInput };