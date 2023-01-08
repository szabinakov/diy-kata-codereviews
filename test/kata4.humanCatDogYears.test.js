const { humanCatDogYears } = require("../src");
describe("humanCatDogYears", () => {
  test("return cat and dog and human arrays when human years are passed", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
    expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
    expect(humanCatDogYears(5)).toEqual([5, 36, 39]);
  });
});
