class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        for(let i=0;i<prices.length-1;i++){
            for(let j=i+1;j<prices.length;j++){
                let profit = prices[j] -prices[i];
                console.log(`${prices[i]} - ${prices[j]} == profit of ${profit}`)
                maxProfit = Math.max(maxProfit,profit)
            }
        }
        return maxProfit
    }
}
