//https://leetcode.com/problems/minimum-size-subarray-sum/description/
// TC -- O(n) , SC-- O(1)
var minSubArrayLen = function(target, nums) {
    const n = nums.length
    let l = 0
    let sum = 0
    let minLen = Infinity

    for(let r = 0; r < n; r ++){
        sum = sum + nums[r]

        while(sum >= target) {
            minLen = Math.min(minLen,r - l + 1)
            sum = sum - nums[l]
            l++
        }
        

    }
    return minLen === Infinity ? 0 : minLen
    
};
