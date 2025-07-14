// TC -- O(n)
// SC -- O(1)
var moveZeroes = function(nums) {
    const n = nums.length
    // 2 pointer
    let l = 0
    for(let r = 0; r <n ; r++) {
        if(nums[r]!== 0 ){
            // swap
            [nums[l],nums[r]] = [nums[r],nums[l]]
            l++
        }

    }
    
};
//--------------------------------------------------- 2 Approach-------------------------------------------------------------
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
