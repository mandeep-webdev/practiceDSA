//https://leetcode.com/problems/longest-substring-without-repeating-characters/

// using HashMap
var lengthOfLongestSubstring = function(s) {
    let l = 0
    let maxLen = 0
    // store last seen index for each charac
    const map = new Map()
    for(let r = 0; r<s.length; r++) {
        if(map.has(s[r])){
            const idx = map.get(s[r])
            l = Math.max(l , idx + 1)
        }
        map.set(s[r],r)
        maxLen = Math.max(maxLen, r - l + 1)

    }
    return maxLen
    
};

//-----------------------------------------------------------------------------soln2-----------------------------------------------------------------------------
// use HashSet 
// TC -- O(n) , SC -- O(n)
var lengthOfLongestSubstring = function(s) {
    // solved using Set
    const set = new Set()
    let maxLen = 0
    let l = 0
    let r = 0
    while(r < s.length) {
        // until window becomes valid again shrink it
        while(set.has(s[r])){
            set.delete(s[l])
            l++

        }
        set.add(s[r])
        // window is valid 
        maxLen = Math.max(maxLen, r - l + 1)
        // expand further
        r++

    }
    return maxLen
    
};
