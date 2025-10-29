/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
 function findPivotIndex(arr,target){
    // this array is rotated sorted and contains duplicates
    let start = 0
    let end = arr.length - 1
    while(start < end){
        // removing duplicates
        while(arr[start] === arr[start + 1] && start < end) {
            start ++
        }
        while(arr[end] === arr[end - 1] && end > start) {
            end --
        }
        const mid = Math.floor((start + end)/2)
        if(arr[mid] > arr[end]){
            // here smallest value would lie in right side
            start = mid + 1
        }
        else if(arr[mid] < arr[end]){
            // i am in the right searching space
            end = mid
        }
        
    }
 return start

 }
 function binarySearch(start,end,arr,target){
    while (start <= end) {
        const mid = Math.floor((start + end)/2)
        if(target > arr[mid]) {
            start = mid + 1
        }
        else if(target < arr[mid]){
            end = mid - 1
        }
        else {
            return true
        }
        
    }
    return false

 }
var search = function(nums, target) {
    const pivotIndex = findPivotIndex(nums,target)
  
    if(binarySearch(pivotIndex,nums.length - 1,nums,target)){
        return true
    }
   else {
    return binarySearch(0,pivotIndex - 1,nums,target)
   }
    

    
    
    
    
};
