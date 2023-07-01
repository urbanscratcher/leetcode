/*

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.

*/
/*

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.

*/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  // Conditions
  // 1) i / 3 and i / 5 (GCD, 15) -> FizzBuzz
  // 2) i / 3 -> Fizz
  // 3) i / 5 -> Buzz
  // 4) else -> i

  // 1. make a one dimentional array of n, filled with 0, 1, 2, ... n-1
  const array = Array.from(Array(n), (_, i) => i + 1);

  // 2. apply conditions
  const answer = array.map((i) => {
    if (i % 15 === 0) {
      return "FizzBuzz";
    }

    if (i % 3 === 0) {
      return "Fizz";
    }

    if (i % 5 === 0) {
      return "Buzz";
    }

    return `${i}`;
  });

  // 3. return
  return answer;
};
