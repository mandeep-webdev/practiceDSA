// TC-- O(n*n) SC -- O(1)
var sortArray = function(nums) {
    const n = nums.length
    for(let i=0; i<n; i++){
        for(let j=0; j<n-i; j++){
            if(nums[j] > nums[j+1]){
                // swap
                [nums[j],nums[j+1]] = [nums[j+1],nums[j]]
            }

        }

    }
    return nums
};
