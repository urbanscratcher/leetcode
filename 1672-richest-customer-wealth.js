/*
1672. Richest Customer Wealth

You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

*/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  // 1. sum of each row
  const sums = accounts.map((account) =>
    account.reduce((acc, cur) => acc + cur, 0)
  );

  // 2. compare sums
  // 3. return max
  return Math.max(...sums);
};

const a = maximumWealth([
  [1, 2, 3],
  [2, 3, 4],
]);

console.log(a);
