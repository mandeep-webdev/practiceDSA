/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let s = 0
    let e = nums.length - 1
    while (s < e) {
        const mid = Math.floor((s + e)/2)
        if(nums[mid] > nums[e]){
            // min elemnent would lie in the right side
            s = mid + 1
        }
        else if(nums[mid] === nums[e]){
            e-- //skip duplicates
        }
        else {
            e = mid
        }

    }
    return nums[s]
    
};
