
/* Brute Force Approach*/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length
    let max = -Infinity
    // lets check each combo of buy and sell
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n;j++){
            max = Math.max(max,prices[j]-prices[i])

        }
    }
    return max < 0 ? 0 : max
    
};
