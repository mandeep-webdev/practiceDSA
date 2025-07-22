// https://www.geeksforgeeks.org/problems/insertion-sort/1
// TC -- Worst case: O(n²) (reverse sorted) // SC -- O(1)
class Solution {
    insertionSort(arr) {
        // code here
        let n = arr.length
        for(let i=1; i<n; i++){
            let cur = arr[i]
            let prev = i-1
            while(arr[prev] > cur && prev >=0){
                arr[prev+1] = arr[prev]
                prev--
            
            }
            arr[prev+1] = cur
            
        }
        
    }
}
