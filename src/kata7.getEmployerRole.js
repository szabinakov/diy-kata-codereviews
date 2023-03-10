const getEmployerRole = (employeeName, employees) => {
   const employeeInformation = employees.find(employee => {
    return employee.name == employeeName;
   })
   const employeeRole = employeeInformation.role;
   return employeeRole;
};

module.exports = getEmployerRole;
