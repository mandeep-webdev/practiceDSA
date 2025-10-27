// TC -- O(log n)
var findMin = function(nums) {
    let s = 0
    let e = nums.length - 1
    while(s < e) {
        const mid = Math.floor((s + e)/2)
        if(nums[mid] > nums[e]){
            s = mid + 1
        }
        else {
            e = mid
        }
    }
    // pivot point is the min element
    return nums[s]
    
};
