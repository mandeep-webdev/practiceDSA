// https://leetcode.com/problems/maximum-average-subarray-i/
var findMaxAverage = function(nums, k) {
    const n = nums.length
    let l = 0
    let r = 0
    let sum = 0
    let maxAvg = -Infinity
    while (r < n) {
        sum = sum + nums[r]
        if(r - l + 1 === k) {
            let avg = sum / k
            maxAvg = Math.max(avg,maxAvg)
            sum = sum - nums[l]
            l++
        }
        r++
    }
    return maxAvg
    
};
