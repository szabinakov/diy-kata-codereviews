const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  const employees = [
    { name: "Asif", role: "Electrical Engineer" },
    { name: "Adeel", role: "Mechanical Engineer" },
    { name: "Liam", role: "BIM Technician" },
  ];
  it("returns the employee's role in the company", () => {
    expect(getEmployerRole("Asif", employees)).toBe(
      "Electrical Engineer"
    );
    expect(getEmployerRole("Liam", employees)).toBe("BIM Technician");
  });
});