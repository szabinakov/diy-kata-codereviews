const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}])).toEqual('Bart, Lisa & Maggie');
    expect(joinNames([{name: 'Bart'}, {name: 'Lisa'}])).toEqual('Bart & Lisa');
    expect(joinNames([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'}, {name: 'Marge'}])).toEqual('Bart, Lisa, Maggie, Homer & Marge');
  }); 
  it("returns name as string when passed array with one name", () => {
    expect(joinNames([{name: 'Bart'}])).toEqual('Bart');
  });
});
