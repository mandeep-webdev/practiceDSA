// Map Appraoch TC -- O(n), SC -- O(k)
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    const map = new Map()

    // count freq from s
    for(let ch of s) {
       map.set(ch, (map.get(ch) || 0)  + 1)
    }

    // decrease freq using t
    for(let ch of t) {
        if(!map.has(ch) || map.get(ch) === 0) return false
        map.set(ch,map.get(ch) - 1)
    }
    return true

    
};
// Fixed Array Approach -- TC -- O(n) SC -- O(1)
 function idx(ch) {
    return ch.charCodeAt(0) - 'a'.charCodeAt(0)
 }
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    const array = new Array(26).fill(0)
    for(let ch of s) {
        array[idx(ch)] ++
    }
    for(let ch of t) {
        if(array[idx(ch)] === 0) return false
        array[idx(ch)]--
    }
    return true

    
};
