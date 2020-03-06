let mongoose = require("mongoose");

let schema = mongoose.Schema({
  name : String,
  title : String,
  company : String,
  industry : String,
  address : String
});

module.exports = mongoose.model("Contact",schema);