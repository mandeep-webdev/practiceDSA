// https://leetcode.com/problems/power-of-two/
var isPowerOfTwo = function(n) {
    // if n is 0 or -ve return false
    if(n<=0) return false
   
    if(n===1) return true
    // odd number can't be power of 2 except 1
    if(n %2 !==0 ) return false
    // keep dividing the number 
    return isPowerOfTwo(n/2)
};
