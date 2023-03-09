const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(24 , 20)).toEqual('I will be there in 1 hour');
  });
  test("returns 'hours' if the time is more than 1", () => {
    expect(reachDestination(20, 10)).toEqual('I will be there in 2 hours');
  });
}); 

