const express = require("express");
const router = express.Router();
const employee_controller = require("../controllers/employee.controller");


router.post('/create', employee_controller.create);
router.get('/:id', employee_controller.employees_details);





module.exports = router;
