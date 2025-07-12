/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const n = nums.length
    let i = 0;
    let j=0;
    while(j<n) {
        if(nums[j] !== 0) {
            nums[i] = nums[j]
            i++
        }
        j++
    }
    while(i < n) {
        nums[i] = 0
        i++
        
    }
    
};
