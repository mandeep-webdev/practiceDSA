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
