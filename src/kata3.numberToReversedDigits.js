const numberToReversedDigits = (number) => {
  const newArray = number.toString().split("").map(Number);
  const reverseArray = newArray.reverse();
  return reverseArray;
};

module.exports = numberToReversedDigits;
