/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let zero_number = 0
    const answer = []
    const pos_array = {}
    const neg_array = {}
    nums.sort((a,b) => a - b)

    for (let key in nums) {
        if (!nums[key]) {
            zero_number += 1
        } else if (nums[key] > 0) {
            if (!pos_array[nums[key]]) {
                pos_array[nums[key]] = 0
            }
            pos_array[nums[key]] += 1
        } else {
            if (!neg_array[0 - nums[key]]) {
                neg_array[0 - nums[key]] = 0
            }
            neg_array[0 - nums[key]] += 1
        }
    }

    if (zero_number >= 3) {
        answer.push([0, 0, 0])
    }

    if (zero_number >= 1) {
        for (let key in pos_array) {
            if (pos_array[key] && neg_array[key]) {
                answer.push([key * 1, 0, key * -1])
            }
        }
    }

    for (let key in pos_array) {
        let rec_number = {}
        if (neg_array[key / 2] && neg_array[key / 2] >= 2) {
            answer.push([key * 1, key / -2 , key / -2])
        }

        for (let key2 in neg_array) {
            if (key2 > key / 2) {
                break
            } 

            if (neg_array[key2] && neg_array[key - key2] && !rec_number[key2] && (key2 * 2 !== key * 1)) {
                answer.push([key * 1, key2 * -1, (key - key2) * -1])
                rec_number[key - key2] = 1
            }
        }
    }

    for (let key in neg_array) {
        let rec_number = {}
        if(pos_array[key / 2] && pos_array[key / 2] >= 2 ) {
            answer.push([key * -1, key / 2, key / 2])
        } 
        for (let key2 in pos_array) {
            if (key2 > key / 2) {
                break
            } 

            if (pos_array[key2] && pos_array[key - key2] && !rec_number[key2] && (key2 * 2 !== key * 1)) {
                answer.push([key * -1, key2, key - key2])
                rec_number[key - key2] = 1
            }
        }
    }
    return answer
};
