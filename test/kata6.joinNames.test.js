const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([
        {
          name: "Bart",
        },
        {
          name: "Lisa",
        },
        {
          name: "Maggie",
        },
      ])
    ).toEqual("Bart, Lisa & Maggie");
    expect(
      joinNames([
        {
          name: "Lucy",
        },
        {
          name: "Jane",
        },
        {
          name: "Natalie",
        },
        {
          name: "Jed",
        },
      ])
    ).toEqual("Lucy, Jane, Natalie & Jed");
  });
});
