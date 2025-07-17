const arr = [3,5,6,7]

function sum(arr){
    const n = arr.length
    for(let i=0; i<n; i++){
        if(i === n-1) return arr[i]
        return arr[i] + sum(arr.slice(i+1,n))
        
    }
}
const ans = sum(arr)
console.log(ans)
