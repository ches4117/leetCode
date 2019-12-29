/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let max = min = ans = nums[0]
    for(let i = 1; i < nums.length; i++) {
        let temp = max;
        max = Math.max(Math.max(max * nums[i], min * nums[i]), nums[i]);
        min = Math.min(Math.min(temp * nums[i], min * nums[i]), nums[i]);
        ans = max > ans ? max : ans
    }

    return ans
};