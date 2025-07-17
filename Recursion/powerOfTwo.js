/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // if n is 0 or -ve return false
    if(n<=0) return false
   
    if(n===1) return true
    // odd number can't be power of 2 except 1
    if(n %2 !==0 ) return false
    // keep dividing the number until turns 1
    return isPowerOfTwo(Math.floor(n/2))
};
