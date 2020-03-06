let mongoose = require("mongoose");

let schema = mongoose.Schema({
  itemPurchased : {type : String},
  amount : Number,
  createdDate : {type : Number,default : Date.now},
  merchant : String
});

module.exports = mongoose.model("history",schema);