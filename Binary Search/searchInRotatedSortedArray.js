/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 function findPivotIndex(arr){
    let start = 0
    let end = arr.length - 1
    while(start < end) {
        const mid = Math.floor((start + end)/2)
        if(arr[mid] > arr[end]){
            start = mid + 1
        }
        else {
            end = mid
        }
    }
    return start


 }
 function binarySearch(start,end,arr,target){
    while(start <= end){
        const mid = Math.floor((start + end)/2)
        if(target === arr[mid]) return mid
        else if(target > arr[mid]) start = mid + 1
        else end = mid - 1
    }
    return -1
 }
var search = function(nums, target) {
    const pivotIndex = findPivotIndex(nums)
    const leftAns = binarySearch(pivotIndex,nums.length - 1,nums,target)
    const rightAns = binarySearch(0,pivotIndex - 1,nums,target)
    return leftAns === -1 ? rightAns : leftAns
    
   

    
};
