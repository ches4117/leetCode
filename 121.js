/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min_price = 999999999999
    let max_profit = 0
    let length = prices.length
    for (let i = 0; i < length; i++) {
        if(prices[i] < min_price) {
            min_price = prices[i]
        } else if (prices[i] - min_price > max_profit)
            max_profit = prices[i] - min_price;
    }
    return max_profit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))