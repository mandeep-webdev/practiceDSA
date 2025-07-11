// TC -- O(n)
// SC -- O(1)
 var maxProfit = function(prices) {
    const n = prices.length
    let maxProfit = 0
    let l = 0; // buy pointer
    let r = 1; // sell pointer 
    while (r < n) {
        if(prices[l] > prices[r]) {
            l = r // we want buy pointer to be minimum
        }
        else {
            let profit = prices[r] - prices[l]
            maxProfit = Math.max(maxProfit, profit)
            
        }
        r++
    }
    return maxProfit
    
};

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
