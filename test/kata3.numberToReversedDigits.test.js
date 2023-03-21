const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(123)).toEqual([3, 2, 1]);
    expect(numberToReversedDigits(321)).toEqual([1, 2, 3]);
    expect(numberToReversedDigits(456)).toEqual([6, 5, 4]);
  });
});