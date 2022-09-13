const { connect } = require('./client');
const { setupInput } = require('./input');



console.log("Connecting ...");
const onjCon = connect();
setupInput(objCon);