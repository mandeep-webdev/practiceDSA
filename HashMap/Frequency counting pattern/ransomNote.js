//---------------------------------------Naive Approach---------------------------------------------------------------------
// TC -- O(n2) , SC --- O(n) 
var canConstruct = function(ransomNote, magazine) {
    if(magazine.length < ransomNote.length) return false
    const rArr = ransomNote.split('')
    for(let ch of magazine){
        const index = rArr.indexOf(ch)
        if(index >=0) {
            rArr.splice(index,1) //remove 
        }

    }
    if(rArr.length === 0) return true
    else return false
    
};
