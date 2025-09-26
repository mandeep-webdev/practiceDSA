// TC -- O(n) + O(m) 
// SC -- O(n)
var nextGreaterElement = function(nums1, nums2) {
    // precompute next greater element for all elements of nums2
    // take map {value : greaterEl}
    const map = new Map
    const stack = []
    const result = Array(nums1.length).fill(-1)

    for(let i=0; i<nums2.length; i++){
        while(stack.length > 0 && nums2[i] > nums2[stack[stack.length - 1]]){
              map.set(nums2[stack.pop()],nums2[i])
        }
        stack.push(i) // waiting element

    }

    for(let j = 0; j<nums1.length; j++) {
        if(map.has(nums1[j])) {
            result[j] = map.get(nums1[j])
        }
    }

    return result;

    
};

// brute force
// TC -- O(n1 · n2²)

var nextGreaterElement = function(nums1, nums2) {
    const result = []
    for(let i=0; i<nums1.length; i++) {
        for(let j=0; j<nums2.length; j++) {
            if(nums1[i] === nums2[j]) {
                let found = false
                for(let k = j+1; k<nums2.length; k++ ) {
                    if(nums2[k] > nums2[j]) {
                        found = true
                        result[i] = nums2[k]
                        break
                    }
                     

                }
                if(!found) {
                    result[i] = -1
                }

            }
        }

    }
    return result
    
};
