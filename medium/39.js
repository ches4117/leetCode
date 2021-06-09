/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var iterate = (answer, startIdx, list, rest, nowSequence) => {
  if (rest === 0) answer.push([...nowSequence])
  for (let i = startIdx; i < list.length; i++) {
    if (rest - list[i] >= 0) {
      nowSequence.push(list[i])
      iterate(answer, i, list, rest - list[i], nowSequence)
      nowSequence.pop()
    }
  }
}

var combinationSum = function (candidates, target) {
  const answer = []
  iterate(answer, 0, candidates, target, [])
  return answer
};