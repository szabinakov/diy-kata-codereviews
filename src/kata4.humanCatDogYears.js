const humanCatDogYears = (number) => {
const catYears = number => (15 + 9) + ((number-2) * 4);
const dogYears = number => (15 + 9) + ((number-2) * 5);
return [number, catYears(number), dogYears(number)];
};

module.exports = humanCatDogYears;
