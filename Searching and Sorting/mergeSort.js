//https://leetcode.com/problems/sort-an-array/
 const mergeSortedArray =(a1,a2) => {
    const result = []
    let i = 0;
    let j = 0;
    while(i < a1.length && j < a2.length){
        if(a1[i] < a2[j]) {
            result.push(a1[i])
            i++
        }
        else {
            result.push(a2[j])
            j++
        }
    }
    while(i < a1.length){
        result.push(a1[i])
        i++
    }
    while(j< a2.length){
        result.push(a2[j])
        j++

    }
    return result

 }
var sortArray = function(nums) {
    const n = nums.length
    if(n<=1) return nums
    let half = Math.floor(n / 2)
    let left = sortArray(nums.slice(0,half))
    let right = sortArray(nums.slice(half))
    return mergeSortedArray(left,right)
    
};
