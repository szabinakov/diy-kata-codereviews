const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  const employees = [
    { name: "Satti", role: "Developer" },
    { name: "Jenny", role: "Sales Associate" },
    { name: "Javid", role: "Human Recommended Reading Assistant" },
    { name: "Asif", role: "Electrical Engineer" },
    { name: "Adeel", role: "Mechanical Engineer" },
    { name: "Liam", role: "BIM Technician" },
  ];
  it("returns the employee's role in the company", () => {
    expect(getEmployerRole("Asif", employees)).toBe(
      "Electrical Engineer"
    );
    expect(getEmployerRole("Satti", employees)).toBe("Developer");
  });
});