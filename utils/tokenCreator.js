const jwt = require('jsonwebtoken');

const maxAge =  3 * 60 * 60;   /* this is in Seconds! - 3hrs To seconds. */

// Craete Token here!
const createToken = (id) => {
  return jwt.sign({ id }, "mysecret", { expiresIn: maxAge });
};

module.exports = { maxAge, createToken };