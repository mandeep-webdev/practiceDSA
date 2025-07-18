//https://www.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1
// TC -- O(n) SC--- O(1)
class Solution {
    search(arr, x) {
        const n = arr.length
        for(let i=0; i<n; i++){
            if(arr[i] == x) return i
            
        }
        return -1
        
    }
}
