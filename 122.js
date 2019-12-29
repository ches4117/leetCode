/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let total = 0
    let now = prices[0]
    let length = prices.length
    for (let i = 1; i < length; i++) {
        if(prices[i] < now) {
            now = prices[i]
        } else if(prices[i + 1] < prices[i] || i + 1 === length) {
            total += (prices[i] - now)
            now = prices[i + 1]
        }
    }
    return total
};

console.log(maxProfit([1, 2]))