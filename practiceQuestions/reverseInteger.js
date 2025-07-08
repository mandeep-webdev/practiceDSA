/**
 * @param {number} x
 * @return {number}
 */


var reverse = function(x) {
   
    // if x is -ve
    let xCopy = x
    // convert -ve to +ve
    x = Math.abs(x)

    // if x is -ve
    let rev = 0
    while(x > 0) {
        let lastDigit = x % 10
        rev = (10 * rev) + lastDigit
        x = Math.floor(x/10)  // remove the last Digit

    }

    let limit = Math.pow(2,31)
    if(rev < -limit || rev > limit) return 0
    if(xCopy < 0) {
        return -rev
    }
    
   
    return rev
    
};
