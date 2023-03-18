const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns boolean to string", () => {
    expect(booleanToWord(true)).toEqual('Yes');
  });
});
