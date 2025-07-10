/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

 function swap (s,a,b) {
    let temp = s[a]
    s[a] = s[b]
    s[b] = temp

 }
var reverseString = function(s) {
    let n = s.length;
    // run the loop till half
    let half = Math.floor(n/2)

    for(let i = 0; i<half; i++) {
        swap(s,i,n-1-i);
    }
    
};
