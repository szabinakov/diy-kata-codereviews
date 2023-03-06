const numberToReversedDigits = (number) => {
    return number.toString().split("").reverse().map(string => parseInt(string, 10));
};

module.exports = numberToReversedDigits;
