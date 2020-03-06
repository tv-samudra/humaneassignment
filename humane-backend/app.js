const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
let { port } = require("./config");
let bodyParser = require("body-parser");
let contactRoutes = require("./routes/contacts");
let userRoutes = require("./routes/users");
let historyRoutes = require("./routes/histories")
let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/humane");

let app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users",userRoutes);
app.use("/contacts",contactRoutes);
app.use("/histories",historyRoutes)

app.listen(port, () => console.log(`The server is up and running at ${port}`));

require("./populateDb");