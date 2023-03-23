const fizzBuzz = (number) => {

    const multipleOf3 = number % 3 === 0;
    const multipleOf5 = number % 5 === 0;
  

    if (multipleOf3 && multipleOf5) {
        return "FizzBuzz";
      }

    if (multipleOf3) {
        return "Fizz";
      }

      if (multipleOf5) {
        return "Buzz";
      }

    if (!(multipleOf3 || multipleOf5)) {
      return number;
    }
  };

module.exports = fizzBuzz;
