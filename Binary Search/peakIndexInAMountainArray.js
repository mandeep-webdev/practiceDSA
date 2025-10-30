//------------------------Binary Search----------------------
// TC -- O(logn)
var peakIndexInMountainArray = function(arr) {
    let start = 0
    let end = arr.length - 1
    while(start < end){
        const mid = Math.floor((start + end)/2)
        // we are in the increasing part , go right
        if(arr[mid+1] > arr[mid]) {
            start = mid + 1
        }
        else {
            // we are in the decrasing part
            end = mid

        }

    }
    return start
    
};





//-----------------------------------Brute Force-------------------------------
// TC--O(n)
var peakIndexInMountainArray = function(arr) {
    let peakIndex = -1
    for(let i=1; i<arr.length - 1; i++){
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
            peakIndex =  i
        }
    }
    return peakIndex
    
};
