const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("Returns Yes or No dependent on booleanToWord value", () => {
  expect(booleanToWord(true)).toBe('Yes');
  expect(booleanToWord(false)).toBe('No');
});
});