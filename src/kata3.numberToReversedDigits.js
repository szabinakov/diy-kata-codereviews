const numberToReversedDigits = (number) => {
    //return number.toString().split("").reverse().map(string => parseInt(string, 10));
    const reverseStrings = number.toString().split("").reverse();
    const convertToIntegers = reverseStrings.map(string => parseInt(string, 10));
    return convertToIntegers;
};

module.exports = numberToReversedDigits;
