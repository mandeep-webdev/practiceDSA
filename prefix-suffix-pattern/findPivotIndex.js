/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const n = nums.length
    let totalSum = 0
    for(let i=0; i<n;i++) {
        totalSum += nums[i]

    }
    let leftSum = 0
    for(let j = 0; j<n; j++){
        rightSum = totalSum - leftSum - nums[j]
        if(leftSum === rightSum) {
            return j
        }
        leftSum = leftSum + nums[j]

    }
    return -1
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const n = nums.length
    const prefix = []
    const suffix = []
    prefix[0] = nums[0]
    suffix[n-1] = nums[n-1]
    for(let i = 1; i<n; i++){
        prefix[i] = prefix[i-1] + nums[i]

    }
    for(let j=n-2; j>=0;j--){
        suffix[j] = suffix[j+1] + nums[j]

    }
    for(let k = 0; k<n; k ++){
        let pivot = k
        if(pivot === 0) {
            prefix[k-1] = 0
        }
        if(pivot === n-1) {
            suffix[k+1] = 0
        }
        if(prefix[k-1] === suffix[k+1]) {
            pivot = k
            return pivot
        }

    }
    
    return -1
};

