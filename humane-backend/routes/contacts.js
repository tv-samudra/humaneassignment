let express = require("express");
let route = new express.Router();
let {getContacts,getFilters} =require("../controller/contacts.controller");

route.post("/",getContacts);

route.get("/filters",getFilters);

module.exports = route;