/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const n = nums.length
    let i = 0;
    for(let j=0; j<n; j++){
        if(nums[j] !== nums[i]){
            nums[i+1] = nums[j]
            i++;
        }
    }
    return i+1;
    
};
