const { joinNames } = require("../src");

const nameList = [{
  name: 'Homer'
}, {

  name: 'Marge'

}, {

  name: 'Bart'

}, {

  name: 'Lisa'

}, {

  name: 'Maggie'

}];

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(nameList)).toEqual('Homer, Marge, Bart, Lisa & Maggie')  
  });
});
