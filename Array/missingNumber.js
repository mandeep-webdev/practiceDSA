// TC --- O(n)
// SC -- O(1)
var missingNumber = function(nums) {
    const n = nums.length
    // formula to find the sum of number [1 - n]
    const totalSum = n * (n + 1) / 2
    let curSum = 0
    for(let i=0; i<n; i++){
        curSum+=nums[i]

    }
    return totalSum - curSum
    
};
