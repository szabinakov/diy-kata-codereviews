
const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    test("returning array of human, cat and dog years", () => {
        expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
    });
    test("returning array of human, cat and dog years", () => {
        expect(humanCatDogYears(3)).toEqual([3, 28, 29]);
    });
});
