const Employee = require('../models/employees.js');
const util = require('../util.js');

module.exports = {
	//Find All Employee
	getAllEmployees: (req, response) =>
	{
		Employee.find({}, util.handleQuery(response));
	},

	//Find One Employee By MongoDB ID
	getEmployee: (req, response, params) =>
	{
		Employee.findById(params.id, util.handleQuery(response));
	},
	
	//Find One Employee By employeeID
	getEmployee: (req, response, params) =>
	{
		Employee.find({employeeID: params.employeeID}, util.handleQuery(response));
	},

	//Check if a employee is a Manager
	isEmployeeManager: (req, response) =>
	{
		Employee.findById(req.params.id, (err, employee) =>
		{
			if(err)
			{
				handleError(response, err.message);
			}
			if(!employee) {
				response.status(404);
				response.send();
				return;
			}
			response.status(200);
			response.send(employee.employeeType === 'General Manager' || employee.employeeType === 'Shift Manager');
		});
	},

	//Add Employee
	addEmployee: (req, response) =>
	{
		var data = req.body;
		if(! data.manages) {
			data.manages = [];
		}
		data.createdOn = Date.now();
		var employee = new Employee(data);
		employee.save(util.handleQuery(response));
	},


	//Update Employee
	updateEmployee: (req, response) =>
	{
		Employee.findByIdAndUpdate(req.params.id, req.body, util.handleQuery(response));
	},

	// Delete record
	deleteEmployee: (req, response) => {
		Employee.deleteOne({employeeID: req.params.id}, util.handleQuery(response));
	},

	// Find One Employee by EmployeeId
	getEmployeeById: (req, response, params) =>
	{
		Employee.findOne({employeeId: params.employeeId}, util.handleQuery(response));
	}
};
