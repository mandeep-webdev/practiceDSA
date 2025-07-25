
//https://leetcode.com/problems/length-of-last-word/
//--------------------------------------------------------------------------Approach----------------------------------------------------------------------------------------
// TC -- O(n)
// SC -- O(1)
var lengthOfLastWord = function(s) {
    const n = s.length
    let count = 0
    // let's start from back
    for(let i=n-1; i>=0; i--){
        // ignoring spaces occured from back
        if(s.charAt(i) === ' ' && count === 0) {
            continue
        }
        // ignoring spaces which occured after last word and ending the loop
        else if(s.charAt(i) === ' ' && count > 0){
            break
        }
        // counting the length of last word
        else{
            count++
        }

    }
    return count
    
};
