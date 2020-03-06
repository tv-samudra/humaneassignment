let { authenticationService } = require("../services/users.services")
module.exports.authenticate = function (req, res) {
  try {
    let { body: { username, password } } = req;
    let response = authenticationService({ username, password });
    res.json(response);
  } catch (err) {
    res.json({ status: 500, message: "Something went wrond", data: err });
  }
}