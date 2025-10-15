// -----------------------------------------Two Pointers Same Direction--------------------------------------
// TC-- O(n) and SC-- O(1)
var removeDuplicates = function(nums) {
    // points to last unique element
    let i = 0
    // scan throught the structure and find new unique element
    for(let j = 1; j<nums.length; j++) {
        // when find new element
        if(nums[j] !== nums[i]) {
            i++
            // overwrite
            nums[i] = nums[j]

        }
    }
    return i + 1
    
};
