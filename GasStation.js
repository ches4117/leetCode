/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var exGas = [4, 0, 1]
var exCost = [3, 2, 1]

var canCompleteCircuit = function (gas, cost) {
  let startIndex = 0
  let roadLen = gas.length

  while (startIndex !== roadLen) {
    let nowIndex = startIndex
    let nextIndex = (nowIndex + 1) % roadLen
    let nowGas = gas[startIndex]
    let route = 0

    while (nowGas >= 0 && route !== roadLen) {
      if ((nowGas - cost[nowIndex]) < 0) {
        nowGas = -1
      } else {
        route += 1
        nowGas = nowGas - cost[nowIndex] + gas[nextIndex]
        nowIndex = nextIndex
        nextIndex = (nextIndex + 1) % roadLen
      }
    }

    if (nowGas >= 0) {
      return nowIndex
    } else {
      startIndex += 1
    }
  }
  return -1
};

console.log(canCompleteCircuit(exGas, exCost))

