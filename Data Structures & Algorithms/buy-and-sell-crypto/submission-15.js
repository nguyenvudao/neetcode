class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        /**
         * Brute force
         */
        // let maxProfit = 0
        // for (let i = 0; i < prices.length; i++) {
        //     for (let j = i + 1; j < prices.length; j++) {
        //         maxProfit = Math.max(maxProfit, prices[j] - prices[i])
        //     }
        // }

        // return maxProfit

        /**
         * Two pointers
         */
        // let left = 0
        // let right = left + 1
        // let maxProfit = 0
        // while (right < prices.length) {
        //     maxProfit = Math.max(maxProfit, prices[right] - prices[left])
        //     if (prices[left] > prices[right]) left++
        //     else right++
        // }

        // return maxProfit

        /**
         * Dynamic programming
         */
        
        let minBuy = prices[0]
        let maxProfit = 0

        for (const price of prices) {
            maxProfit = Math.max(maxProfit, price - minBuy)
            minBuy = Math.min(minBuy, price)
        }

        return maxProfit
    }
}
