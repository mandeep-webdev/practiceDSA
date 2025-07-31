//---------------------------------Better Soln----------------------------------------------------------
// TC -- O(n) and SC -- O(n)
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const n = nums.length
        let set = new Set()

        for(let i=0; i<n; i++){
            // see already
           if(set.has(nums[i])){
            return true

           }
           set.add(nums[i])

        }
        return false;
    }
}


//-------------------------------------------------Brute Force-------------------------------------------------------
// TC -- O(n^2) SC -- O(1)
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const n = nums.length
        for(let i=0; i<n; i++){
            for(let j= i+1; j<n; j++){
                if(nums[i] === nums[j]){
                    return true
                }
            }
        }
        return false
    }
}
