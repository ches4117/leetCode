var search = function (nums, target) {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    let mid = Math.floor((r - l) / 2 + l)
    if (nums[mid] === target) return mid
    if (nums[l] <= nums[mid]) {
      // left sorted
      if (target >= nums[l] && target < nums[mid]) {
        // target in sorted
        r = mid - 1
      } else {
        // target in unsorted
        l = mid + 1
      }
    } else {
      // right sorted
      if (target <= nums[r] && target > nums[mid]) {
        // target in sorted
        l = mid + 1
      } else {
        // target in unsorted
        r = mid - 1
      }
    }
  }
  return -1
};