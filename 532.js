/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    nums_hash = {}
    ans = 0 
    for(let i = 0; i < nums.length; i++) {
        if(nums_hash[nums[i]]) {
            nums_hash[nums[i]] += 1
        } else {
            nums_hash[nums[i]] = 1
        }
    }

    Object.keys(nums_hash).forEach((e) => {
        let e_num = parseInt(e)
        let next = String(e_num + k)
        if(k < 0) {
        } else if(k == 0) {
            if(nums_hash[e] >= 2) {
                ans += 1
            }
        } else if (nums_hash[e] && nums_hash[next]) {
            ans += 1
        }
    })

    return ans
};

console.log(findPairs([1, 1, 3, 4, 5], -1))