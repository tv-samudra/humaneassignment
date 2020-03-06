let jwt = require("jsonwebtoken");
let { secret } = require("../config");

module.exports.authenticationService = function ({ username, password }) {
  let aUsername = "username";
  let aPassword = "password";

  if (username == aUsername && password == aPassword) {
    let token = jwt.sign({ username, password }, secret);
    return { success: true, data: { token } };
  }
  return {success : false};
}