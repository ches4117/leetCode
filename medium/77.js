/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */


var combine = function (n, k) {
  const answer = []
  const iter = (nowIndex, nowSeq) => {
    for (let i = nowIndex; i <= n; i++) {
      console.log(nowSeq)
      iter(i + 1, [...nowSeq, i])
    }
  }
  iter(1, [])
  return answer
};