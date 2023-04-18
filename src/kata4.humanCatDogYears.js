const humanCatDogYears = (number) => {
  const yearOne = 15;
  const yearTwo = 9;
  const n = number - 2;
  const catYear3 = n * 4;
  const dogYear3 = n * 5;
  let catYearTotal = yearOne + yearTwo + catYear3;
  let dogYearTotal = yearOne + yearTwo + dogYear3;
  if (number === 2) {
    let catYearTotal = 24;
    let dogYearTotal = 24;
    return [number, catYearTotal, dogYearTotal];
  }
  if (number === 1) {
    let catYearTotal = 15;
    let dogYearTotal = 15;
    return [number, catYearTotal, dogYearTotal];
  }

  return [number, catYearTotal, dogYearTotal];
};

module.exports = humanCatDogYears;
