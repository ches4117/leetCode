/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxSum = nums[0];
    let contSum = nums[0];

    nums.slice(1).forEach((num) => {
        contSum = num > contSum ? Math.max(num, contSum + num) : contSum + num
        maxSum = contSum > maxSum ? contSum : maxSum
    });

    return maxSum;
};

console.log(maxSubArray([2, 0, 3, -2]))