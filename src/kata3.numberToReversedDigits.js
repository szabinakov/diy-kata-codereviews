const numberToReversedDigits = (number) => {
  const item = Array.from(String(number), Number);
  return item.reverse();
};

module.exports = numberToReversedDigits;
