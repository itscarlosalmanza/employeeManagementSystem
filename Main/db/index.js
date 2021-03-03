//This js file requires `connection.js`
const connection = require("./connection");

class DB {
  constructor(connection) {
    //stores a refefrence to the connection in the class for later use
    this.connection = connection;
  }

  //the function will find all the employees to display roles, departments, salaries, managers
  findAllEmployees() {
    return this.connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
    );
  }

  findAllPossibleManagers(employeeId) {
    return this.connection.query(
      "SELECT id, first_name, last_name FROM employee WHERE id != ?",
      employeeId
    );
  }

  // add employee
  createEmployee(employee) {
    return this.connection.query("INSERT INTO employee SET ?", employee);
  }



  // update employee role
  updateEmployeeRole(employeeId, roleId) {
    return this.connection.query(
      "UPDATE employee SET role_id = ? WHERE id = ?",
      [roleId, employeeId]
    );
  }
  

  // find all roles and join with departments to display the department name
  findAllRoles() {
    return this.connection.query(
      "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
    );
  }

  // add a role
  createRole(role) {
    return this.connection.query("INSERT INTO role SET ?", role);
  }


  // find departments and join with employees and roles
  findAllDepartments() {
    return this.connection.query(
      "SELECT department.id, department.name, SUM(role.salary) AS utilized_budget FROM department LEFT JOIN role ON role.department_id = department.id LEFT JOIN employee ON employee.role_id = role.id GROUP BY department.id, department.name"
    );
  }

  // add a department
  createDepartment(department) {
    return this.connection.query("INSERT INTO department SET ?", department);
  }


  // find all employees in a given department and join roles to display role titles
  findAllEmployeesByDepartment(departmentId) {
    return this.connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department department on role.department_id = department.id WHERE department.id = ?;",
      departmentId
    );
  }

}

module.exports = new DB(connection);
