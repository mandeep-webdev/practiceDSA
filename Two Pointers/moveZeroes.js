//------------------------Two Pointer(Same Direction)-------------------------
// TC-- O(n) , SC--O(1)
var moveZeroes = function(nums) {
    let i = 0 // points to a position where non-zero would go
    // j will find the non - zero
    for(let j=0; j<nums.length; j++){
        if(nums[j] !== 0) {
            // swap
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            i++
        }

    }
    
    
};
