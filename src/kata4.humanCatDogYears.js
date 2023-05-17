const humanCatDogYears = (number) => {
  function calcCatYears(humanYears) {
    if (humanYears === 1) {
      return 15;
    }
    if (humanYears === 2) {
      return 24;
    }
    return (humanYears - 2) * 4 + 24;
  }
  function calcDogYears(humanYears) {
    if (humanYears === 1) {
      return 15;
    }
    if (humanYears === 2) {
      return 24;
    }
    return (humanYears - 2) * 5 + 24;
  }
  const catYears = calcCatYears(number);
  const dogYears = calcDogYears(number);
  const newArray = [number, catYears, dogYears];
  return newArray;
};

module.exports = humanCatDogYears;
