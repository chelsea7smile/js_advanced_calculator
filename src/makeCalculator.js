'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {};

  calculator.result = 0;

  calculator.add = (num) => {
    calculator.result += num;
  };

  calculator.subtract = (num) => {
    calculator.result -= num;
  };

  calculator.multiply = (num) => {
    calculator.result *= num;
  };

  calculator.divide = (num) => {
    calculator.result /= num;
  };

  calculator.reset = () => {
    calculator.result = 0;

    return calculator;
  };

  calculator.operate = (callback, num) => {
    callback(num);

    return calculator;
  };

  return calculator;
}

module.exports = makeCalculator;
