/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let len1 = nums1.length
    let len2 = nums2.length

    if (len1 > len2) {
        let tmp = nums1.slice()
        nums1 = nums2.slice()
        nums2 = tmp
        len1 = nums1.length
        len2 = nums2.length
    }

    let begin = 0
    let begin_end = len1 
    let rec_number = 0
    while(1) {
        let position1 = Math.floor((begin_end + begin) / 2)
        let position2 = Math.floor((len1 + len2 + 1) / 2)  - position1

        if(position1 == 0) {
            if (position2 == len2) {
                if((len1 + len2)%2) {
                    return nums1[0]
                } else {
                    return (nums1[0] + nums2[position2 - 1]) / 2
                }
            } else {
                return (Math.min(nums1[0], nums2[position2]) + nums2[position2 - 1] ) / 2
            }
        
        } else if((nums1[position1 - 1] <= nums2[position2]) && (nums2[position2 - 1] <= nums1[position1])) {
            return ((nums1[position1 - 1] + (nums2[position2 - 1])) / 2)
        } else if (nums1[position1 - 1] > nums2[position2]) {
            begin_end =  Math.floor(begin_end / 2)
        } else {
            begin = position1
        }

        rec_number += 1 
        if ( rec_number > 10) {
            break
        }
    }
};

// console.log(findMedianSortedArrays([1, 3, 8, 9, 15],[7, 11, 18, 19, 21, 25]))
// console.log(findMedianSortedArrays([23, 26, 31, 35],[3, 5, 7, 9, 11, 16]))
// console.log(findMedianSortedArrays([3, 5, 7, 9, 11, 16],[23, 26, 31, 35]))
console.log(findMedianSortedArrays([1, 2],[3 ,4]))
