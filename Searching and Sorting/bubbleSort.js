// TC-- O(n*n) SC -- O(1)

var sortArray = function(nums) {
    const n = nums.length
    
    for(let i=0; i<n-1; i++){
        let isSwapped = false
        for(let j=0; j<n-1-i; j++){
            if(nums[j] > nums[j+1]){
                // swap
                
                [nums[j],nums[j+1]] = [nums[j+1],nums[j]]
                isSwapped = true
            }

        }
        if(!isSwapped) break
       

    }
    return nums
};
