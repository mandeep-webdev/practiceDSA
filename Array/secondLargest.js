const arr = [4, 5, 6, 4, 3, 2, 5, 1, 6]


function findSecondLargest(arr){
    let n = arr.length;
    // Empty Array
    if(n == 0) {
        return -1;
    }
    // If Array has only 1 element
    if(n < 2) {
        return null;
    }
    let largest = -Infinity
    let secondLargest = -Infinity

    for(let i=0; i<n; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i]

        }
        else if(arr[i] > secondLargest && arr[i] != largest) {
            secondLargest = arr[i]

        }
    }

    return secondLargest;

}

console.log(findSecondLargest(arr))
