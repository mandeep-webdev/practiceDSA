// TC -- O(n)
// SC -- O(n)
var nextGreaterElement = function(nums1, nums2) {
    // precompute next greater element for nums2 array
   const res = new Array(nums1.length).fill(-1)
    // store value : next Greater Element
    const map = new Map()
    const stack = []
    for(let i=0; i<nums2.length; i++){
        // pop
        while(stack.length > 0 && nums2[i] > nums2[stack[stack.length-1]]){
            const popped = stack.pop(stack[stack.length - 1])
            map.set(nums2[popped],nums2[i])
        }
        // push
        stack.push(i)
    }
    for(let j = 0; j< nums1.length; j++) {
        if(map.has(nums1[j])){
            res[j] = map.get(nums1[j])
        }
    }
    return res

    
};
