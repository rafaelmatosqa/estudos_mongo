const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let EmployeeSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  job_titles: { type: String, required: true, max: 100 },
  department: { type: String, required: true, max: 100 },
  full_or_part_time: { type: String, required: true, max: 1 },
  salary_or_hourly: { type: String, required: true, max: 100 },
  annual_salary: { type: String, required: true, max: 20 },
});

module.exports = mongoose.model("employees", EmployeeSchema);
