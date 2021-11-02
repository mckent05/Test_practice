
const stringLength = (string) => {
  const n = string.length;
  if (n > 0 && n < 10) {
    return n;
  } else {
    throw new Error('string should not be more than 10 characters');
  }
};

const reverseString = (string) => {
  let reverse_string = string.split('').reverse().join('');
  return reverse_string;
};

class Calculator {
  static add(n, m) {
    return n + m;
  }

  static substraction(n, m) {
    return n - m;
  }

  static multiply(n, m) {
    return n * m;
  }

  static division(n, m) {
    return n / m;
  }
}

const capitalizeString = (string) => {
  const capitalize = string.charAt(0).toUpperCase() + string.slice(1);
  return capitalize;
};

module.exports = { stringLength, reverseString, Calculator, capitalizeString, }
