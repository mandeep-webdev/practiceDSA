// TC -- O(n) and SC -- O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length
    // create prefix product array
    const prefixProduct = []
    prefixProduct[0] = 1
    for(let i=1; i<n; i++) {
        prefixProduct[i] = nums[i-1] * prefixProduct[i-1]

    }
    // create suffix product array
    const suffixProduct = []
    suffixProduct[n-1] = 1
    for(let i=n-2; i>=0; i--) {
        suffixProduct[i] = nums[i+1] * suffixProduct[i+1]

    }
    const result =  [] 
    for(let i=0; i<n; i++){
        result[i] = prefixProduct[i] * suffixProduct[i]
    }
    return result
};
