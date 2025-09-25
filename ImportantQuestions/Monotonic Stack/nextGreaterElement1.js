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
