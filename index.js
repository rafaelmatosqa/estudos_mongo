const express = require("express");
const bodyParser = require("body-parser");
const employee = require("../estudos_mongo/src/app/routes/employee.route");
const app = express();
const mongoose = require("mongoose");

let url = "mongodb://admin:123456@localhost:27017/Estudos";
let mongoDB = process.env.MONGODB_URI || url;

mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on(
  "error",

  console.error.bind(console, "Erro ao tentar se conectar com o MongoDB"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/employees", employee);

let port = 8000;
app.listen(port, () => {
  console.log("Servidor em execução na porta: " + port);
});
