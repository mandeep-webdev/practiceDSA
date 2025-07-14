// -----------------------------First Thought---------------------------------------
var findMaxConsecutiveOnes = function(nums) {
    const n = nums.length
    let max1s = 0
    let count = 0;

    for(let i = 0; i<n ; i++){
        if(nums[i] === 1) {
            count ++;
        }
        else {
            max1s = Math.max(max1s,count)
            count = 0 

        }

    }
    max1s = Math.max(max1s,count)
    return max1s;
    
};
