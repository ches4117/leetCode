/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let max = n * 2
  let nowSum = 0
  let nowString = ''
  let answer = []
  const dp = (nowSum, nowString) => {
    if (nowString.length === max && nowSum === 0) {
      answer.push(nowString)
      return;
    }
    if (nowString.length === max || nowSum < 0) return;

    dp(nowSum + 1, `${nowString}(`)
    dp(nowSum - 1, `${nowString})`)
  }
  dp(nowSum, nowString)
  return answer
};