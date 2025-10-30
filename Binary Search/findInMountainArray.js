/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
 function findPeakIndex(arr){
    let start = 0
    let end = arr.length() - 1
    while(start < end){
        const mid = Math.floor((start + end)/2)
        if(arr.get(mid) < arr.get(mid + 1)){
            start = mid + 1
        }
        else {
            end = mid
        }

    }
    return start

 }
 function bs(arr,start,end,target,asc){
    while(start <= end){
        const mid = Math.floor((start + end)/2)
        if(asc){
            if(target > arr.get(mid)){
                start = mid + 1
            }
            else if(target < arr.get(mid)){
                end = mid - 1
            }
            else {
                return mid
            }

        }
        else {
            if(target > arr.get(mid)){
                end = mid - 1
            }
            else if(target < arr.get(mid)){
                
                start = mid + 1
            }
            else {
                return mid
            }

        }
    }
    return -1
 }
var findInMountainArray = function(target, arr) {
    const peakIndex = findPeakIndex(arr)
    
       const left =  bs(arr,0,peakIndex,target,true)
       if(left !== -1) return left
        else {
        return bs(arr,peakIndex+1,arr.length()-1,target,false)
    }
    
   
    
};
