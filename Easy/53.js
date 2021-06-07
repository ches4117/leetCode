/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = 0
  let max = -Infinity
  for (let num of nums) {
    sum += num
    max = sum > max ? sum : max
    sum = sum < 0 ? 0 : sum
  }
  return max
};
