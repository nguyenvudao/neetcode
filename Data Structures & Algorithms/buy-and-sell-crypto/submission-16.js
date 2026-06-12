class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minBuy = prices[0]
        let maxProfit = 0

        for (const price of prices) {
            maxProfit = Math.max(maxProfit, price - minBuy)
            minBuy = Math.min(minBuy, price)
        }

        return maxProfit
    }
}
