const Employee = require('../models/employees.js');
const Product = require('../models/products.js');

function handleError(response, message)
{
	console.log("ERROR: " + message);
	res.status(500).json({"error": message});
}

module.exports = {
	//Find All Employee
	getAllEmployees: (req, response) =>
	{
<<<<<<< HEAD
		Employee.find({}, (err, data)) =>
=======
		Employee.find({}, (err, data) =>
>>>>>>> 6822d3e713dbb188f18286d7a7e0efe586d505a5
		{
			if(err) 
			{
				handleError(response, err.message);
			}
			else
			{
				response.status(200).json(data);
			}
		});
	},

	//Find One Employee
	getEmployee: (req, response) =>
	{
<<<<<<< HEAD
		Employee.find({req}, (err, data)) =>
=======
		Employee.find({req}, (err, data) =>
>>>>>>> 6822d3e713dbb188f18286d7a7e0efe586d505a5
		{
			if(err) 
			{
				handleError(response, err.message);
			}
			else
			{
				response.status(200).json(data);
			}
		});
	},

	//Add Employee
	addEmployee: (req, response) =>
	{
		var NewEmployee = req.body;
		NewEmployee.createDate = new Date();
		if (!req.body.name)
		{
			handleError(res, "Invalid input");
		}
		else
		{
			db.collection(EMPLOYEES_DB).insertOne(NewEmployee, (err, data) =>
			{
				if(err)
				{
					handleError(res, err.message);
				}
				else
				{
					res.status(201).json(data.ops[0]);
				}
			});
		}
	},


	//Update Employee
	updateEmployee: (req, response) =>
	{
		Employee.findById(req.params.id, (err, employee) =>
		{
			if (!employee)
			{
				return next(new Error("Could not load document!")); // If no issue presented, throw error
			}
			else
			{
				// Else update all the data
				employee.firstName = req.body.firstName;                          
				employee.lastName = req.body.lastName;
				employee.employeeID = req.body.employeeID;
				employee.active = req.body.active;
				employee.employeeType = req.body.employeeType;
				employee.manages = req.body.manages;
				employee.password = req.body.password;
				employee.createdOn = req.body.createdOn;

				employee.save().then(employee =>
				{
					res.json('Update done');
				}).catch(err => {handleError(response, err.message);});
			}
		});
	}
};
