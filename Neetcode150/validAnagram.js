// TC -- O(n) 
// SC -- O(n)
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        const freq = {}
        for(let i=0; i<s.length; i++){
            if(freq[s[i]]){
                freq[s[i]] ++
            }
            else {
                freq[s[i]] = 1
            }

        }
        for(let j=0; j<t.length;j++){
            if(!freq[t[j]]) return false
            freq[t[j]] -- 

        }
        for(let key in freq){
            if(freq[key] !== 0) return false
           
        }
         return true
    }
}
