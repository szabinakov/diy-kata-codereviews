const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
it ("returns array of human, cat and dog years when passed human years", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    expect(humanCatDogYears(27)).toEqual([27, 124, 149]);
    expect(humanCatDogYears(53)).toEqual([53, 228, 279]);
});
});
