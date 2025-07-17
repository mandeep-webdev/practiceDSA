const arr = [3,2,3,1]

function sumOfOdd(n){
    if(n==0){
        if( arr[n]%2!==0){
            return arr[n]
        }
        else {
            return 0
        }
    }
    if(arr[n]%2!==0){
       return  arr[n] + sumOfOdd(n-1)
    }
    else {
       return  sumOfOdd(n-1)
    }
    
}

console.log(sumOfOdd(arr.length-1))
