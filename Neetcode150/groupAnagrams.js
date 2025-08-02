class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = []
        const map = {}
        for(let i=0; i<strs.length; i++) {
            let sortedWord = strs[i].split('').sort().join('')
            if(map[sortedWord]){
                map[sortedWord] = [...map[sortedWord],strs[i]]
            }
           else {
            map[sortedWord] = [strs[i]]

           } 
        }
        for(let key in map) {
            result.push(map[key])
        }
        return result
    }
}
