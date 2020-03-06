let express = require("express");
let route = new express.Router();

let { authenticate } = require("../controller/users.controllers");

route.post("/login", authenticate);

module.exports = route;