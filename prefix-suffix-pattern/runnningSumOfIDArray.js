// Brute Force Approach 
// TC -- o(n2) and SC -- O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const n = nums.length
    const result = []
    result[0] = nums[0]
    for(let i=1; i<n; i++){
        let sum = 0
        for(let j=0; j<=i; j++){
            
            sum = sum + nums[j]
        }
       
        result[i] = sum
    }
    return result
    
};
// Optimized solution using prefix sum

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// TC -- O(n) and SC -- O(n)
var runningSum = function(nums) {
    const n = nums.length
    const prefix = []
    prefix[0] = nums[0]
    for(let i=1; i<n; i++) {
        prefix[i] = prefix[i-1] + nums[i]

    }
    return prefix
};

// Space Optimization solution -- O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const n = nums.length
    
   
    for(let i=1; i<n; i++) {
        nums[i] = nums[i] + nums[i-1]
    }
    return nums
};
