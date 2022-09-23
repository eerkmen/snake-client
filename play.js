const { connect } = require('./client');
const { setupInput } = require('./input');


console.log("Connecting ...");

const objCon = connect();
setupInput(objCon);