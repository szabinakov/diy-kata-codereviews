/* eslint-disable no-plusplus */
const joinNames = (namesObj) => {
  let nameStrings = "";

  for (let i = 0; i < namesObj.length; i++) {
    if (i === namesObj.length - 1) {
      nameStrings += ` & ${namesObj[i].name}`;
    } else if (i === namesObj.length - 2) {
      nameStrings += namesObj[i].name;
    } else {
      nameStrings += `${namesObj[i].name}, `;
    }
  }
  return nameStrings;
};
module.exports = joinNames;
