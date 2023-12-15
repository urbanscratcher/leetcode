/*
A valid number can be split up into these components (in order):

A decimal number or an integer.
(Optional) An 'e' or 'E', followed by an integer.
A decimal number can be split up into these components (in order):

(Optional) A sign character (either '+' or '-').
One of the following formats:
One or more digits, followed by a dot '.'.
One or more digits, followed by a dot '.', followed by one or more digits.
A dot '.', followed by one or more digits.
An integer can be split up into these components (in order):

(Optional) A sign character (either '+' or '-').
One or more digits.
For example, all the following are valid numbers: ["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"], while the following are not valid numbers: ["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"].

Given a string s, return true if s is a valid number.

*/
//----------------------------------------------
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  let isNumber;

  const firstChar = s.substring(0, 1);

  // signed or not
  const digitsString =
    firstChar === "-" || firstChar === "+" ? s.substring(1, s.length) : s;

  // includ e or E
  const digitsStringArr = digitsString.split("");
  const isEdigits =
    digitsStringArr.includes("e") || digitsStringArr.includes("E");

  const regExp = isEdigits
    ? new RegExp(
        /^[+-]?(\d+\.\d*|\d*\.{1}\d+|\d+)e[+-]?[0-9]+$|^[+-]?(\d+\.\d*|\d*\.{1}\d+|\d+)E[+-]?[0-9]+$/
      )
    : new RegExp(/^[.]{1}[0-9]+$|^[0-9]+[.]{1}[0-9]+$|^[0-9]+[.]{1}$|^[0-9]+$/);
  isNumber = regExp.test(digitsString);

  return isNumber;
};

// TEST ----------------------------------------------
const validArr = [
  "46.e3",
  "2",
  "0089",
  "-0.1",
  "+3.14",
  "4.",
  "-.9",
  "2e10",
  "3e+7",
  "+6e-1",
  "53.5e93",
  "-123.456e789",
  ".0e7",
];
const invalidArr = [
  "56..6e5340",
  "0..",
  "abc",
  "le",
  "e3",
  "99e2.5",
  "--6",
  "-+3",
  "95a54e53",
];

for (let i of validArr) {
  console.log(isNumber(i));
}
console.log("///");
for (let i of invalidArr) {
  console.log(isNumber(i));
}
