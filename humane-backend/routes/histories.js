let express = require("express");
let route = new express.Router();
let {histories,getHistory,updateHistory} =require("../controller/histories.controller");

route.post("/",histories);
route.get("/:_id",getHistory);
route.post("/:_id",updateHistory);

module.exports = route;