//-----------------------------------------Optimized Solution-----------------------------------------------------------
// Tc--- O(n + m) ,  SC---O(1) -- only lowercase letters
var canConstruct = function(ransomNote, magazine) {
    const available = new Map()
    for(let ch of magazine){
        available.set(ch,(available.get(ch) || 0 )+ 1)
    }
    for(let ch of ransomNote){
        // character is available in the inventory and lets use it
        if(available.has(ch) && available.get(ch) > 0 ){
            available.set(ch,available.get(ch) - 1)
            
        }
        else {
            return false
        }
        
    }
    return true
};
//---------------------------------------Naive Approach---------------------------------------------------------------------
// TC -- O(n2) , SC --- O(1) 
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
