const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toStrictEqual([5, 4, 3, 2, 1])
    expect(numberToReversedDigits(56789)).toStrictEqual([9, 8, 7, 6, 5])
    expect(numberToReversedDigits(54321)).toStrictEqual([1, 2, 3, 4, 5])
  });
});
