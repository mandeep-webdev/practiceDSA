// TC -- 	O(n) and SC -- 	O(n)
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const result = []
        const map = {}
        for(let i=0; i<nums.length; i++){
            let desiredNumber = target - nums[i]
            if(desiredNumber in map){
                result.push(map[desiredNumber],i)
                break

            }
            map[nums[i]] = i

        }
        return result
    }
}

//---------------------------------------------------Brute Force----------------------------------------------------
// TC -- O(n^2) // SC -- O(1)
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const result = []
        const n = nums.length
        for(let i=0; i<n; i++){
            for(let j=i+1; j<n; j++){
                if((nums[i] + nums[j]) === target) {
                    result.push(i,j)
                    break;
                }

            }

        }
        return result
    }
}
