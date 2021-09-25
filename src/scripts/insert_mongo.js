const  MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const employee = require('../data_files/employee.json')

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Estudos");
  var my_data = employee;
  dbo.collection("Employee").insertMany(my_data, function(err, res) {
    if (err) throw err;
    console.log("Insert realizado com sucesso");
    db.close();
  });
});