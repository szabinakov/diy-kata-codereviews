
const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([{ name: "Asif" }, { name: "Liam" }, { name: "Emily" }])
    ).toBe("Asif, Liam & Emily");
    expect(
      joinNames([{ name: "Hamaad" }, { name: "Remon" }, { name: "Adeel" }])
    ).toBe("Hamaad, Remon & Adeel");
  });

});