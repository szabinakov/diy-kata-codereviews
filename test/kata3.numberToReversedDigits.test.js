const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
    expect(numberToReversedDigits(321)).toEqual([1, 2, 3]);
    expect(numberToReversedDigits(1629358)).toEqual([8, 5, 3, 9, 2, 6, 1]);
  });
});