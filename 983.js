/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const set = new Set(days)
  let dp = new Array(days[days.length - 1] + 1)
  dp[0] = 0

  for (let i = 1; i < dp.length; i++) {
    if (!set.has(i)) {
      dp[i] = dp[i - 1]
    } else {
      dp[i] = Math.min(
        dp[Math.max(i - 1, 0)] + costs[0],
        dp[Math.max(i - 7, 0)] + costs[1],
        dp[Math.max(i - 30, 0)] + costs[2],
      )
    }
  }
  return dp[dp.length - 1]
};