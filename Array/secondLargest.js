const arr = [4, 5, 6, 4, 3, 2, 5, 1, 6]


function findSecondLargest(arr){
    let n = arr.length;
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
