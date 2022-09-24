const net = require('net');
const { IP, PORT } = require('./constants');

//establish game connection
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  //encode method for interpretion of data
  conn.setEncoding("utf8");
  
  conn.on('data', (data) => {
    console.log(data);
  });

  //connection to the server
  conn.on("connect", () => {
    console.log('Successfully connected to game server!');
    conn.write('Name: EFE');
  });
  
  return conn;
};

module.exports = { connect };