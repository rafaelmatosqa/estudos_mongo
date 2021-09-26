const Employee = require("../models/employee_model");

exports.create = function (req, res) {
  let employee = new Employee({
    name: req.body.name,
    job_titles: req.body.job_titles,
    department: req.body.department,
    full_or_part_time: req.body.full_or_part_time,
    salary_or_hourly: req.body.salary_or_hourly,
    annual_salary: req.body.annual_salary,
  });
  employee.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send("Employee cadastrado com sucesso");
  });
};



exports.employees_details = function (req, res) {
    Employee.findById(req.params.id, function (err, employee) {
if (err) return next(err);
        res.send(employee);
    })
};






