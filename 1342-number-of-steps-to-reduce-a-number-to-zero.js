/*
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
*/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  // Conditions
  // if num % 2 === 0 -> num / 2
  // else num - 1
  // -> make it even so that it can be divided by 2 again

  // define stepCount
  let stepCount = 0;

  // define how operation works
  const step = (n) => {
    if (n % 2 === 0) {
      return n / 2;
    }

    if (n % 2 !== 0) {
      return n - 1;
    }
  };

  // loop operation until num becomes 0
  for (let i = num; i > 0; stepCount++) {
    i = step(i);
  }

  // return count
  return stepCount;
};
