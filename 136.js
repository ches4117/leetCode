/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    answer = 0
    nums.forEach((num) => {
        answer ^= num
    })
    return answer
};

console.log(singleNumber([4, 1, 2, 1, 2]))