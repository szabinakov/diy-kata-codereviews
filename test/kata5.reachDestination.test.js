const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toEqual('I should be there in 4.5 hours.');
    expect(reachDestination(157, 65)).toEqual('I should be there in 2.5 hours.');
    expect(reachDestination(62, 47)).toEqual('I should be there in 1.5 hours.');
  });
});
