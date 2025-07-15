// TC -- O(n) and SC -- O(n)
var singleNumber = function(nums) {
    const n = nums.length
    // use hashmap to track the freq of an element
    const hashmap = {}

    for(let i=0; i<n; i++){
        // if element is not present
        if(!hashmap[nums[i]]){
            hashmap[nums[i]] = 1
        }
        else {
            hashmap[nums[i]]++
        }

    }
    for(let i=0; i<n; i++){
        if(hashmap[nums[i]] == 1) return nums[i]
    }
    
};
