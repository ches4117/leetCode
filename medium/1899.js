/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function (triplets, target) {
  const answer = [false, false, false]
  for (let array of triplets) {
    if (array[0] <= target[0] && array[1] <= target[1] && array[2] <= target[2]) {
      if (array[0] === target[0]) answer[0] = true
      if (array[1] === target[1]) answer[1] = true
      if (array[2] === target[2]) answer[2] = true
    }
    if (!answer.includes(false)) break
  }
  return !answer.includes(false)
};