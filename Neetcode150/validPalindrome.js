// Tc -- O(n) , SC -- O(1)
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s) {
        function isAlphaNumeric (ch) {
            return /^[a-z0-9]$/i.test(ch)
        }
        let l = 0
        let r = s.length -  1
        while (l < r ) {
            while (l < r && !isAlphaNumeric(s[l]) ) {
                // skip
                l++
            }
            while (l < r && !isAlphaNumeric(s[r]) ) {
                // skip
                r--
            }
            if(s[l].toLowerCase() === s[r].toLowerCase()) {
                l++
                r--
            }
            else {
                return false
            }
        }
        return true

    }
}
