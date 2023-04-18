const getEmployerRole = (employeeName, employees) => {
  const result = employees.find((item) => item.name === employeeName);
  return result.role;
};

module.exports = getEmployerRole;
