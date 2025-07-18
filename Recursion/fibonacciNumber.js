const n = 8

function fibo(n){
    // base condition
    if(n===0 || n===1) return n
    return fibo(n-1) + fibo(n-2)
}


console.log(fibo(n))
