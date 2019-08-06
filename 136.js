/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let myMap = new Map();
    myMap.set(nums[0], '1')
    let length = nums.length
    if (length > 1) {
        for (let i = 1; i < nums.length; i++) {
            if (myMap.get(nums[i])) {
                myMap.delete(nums[i])
            } else {
                myMap.set(nums[i], '1')
            }
        }
    }

    for (var key of myMap.keys()) {
        return key
    }
};