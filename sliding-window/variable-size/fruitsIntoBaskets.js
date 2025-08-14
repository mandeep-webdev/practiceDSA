// https://leetcode.com/problems/fruit-into-baskets/
// TC -- O(n) , SC--O(1)
var totalFruit = function(fruits) {
    const n = fruits.length
    let l = 0
    let maxLength = 0
    let distinct = 0
    let map = {}
    for (let r = 0; r<n; r++) {
        // expand the window -- include el in map or change its freq
        if(map[fruits[r]]) {
            map[fruits[r]] ++
        }
        else {
            map[fruits[r]] = 1
            distinct ++
        }
        
        // let size = Object.keys(map).length
        while(distinct > 2) {
            // shrink

            map[fruits[l]] -- 
            if(map[fruits[l]] === 0) {
                delete map[fruits[l]]
                distinct --
            }
            l++
        }

        // window become valid

        maxLength = Math.max(maxLength,r - l + 1)
        


    }
    return maxLength
    
};
