//second largest

let arr1 = [2,4,6,7,8,1]

function secondlarg(arr) {
    if (arr.length < 2) return null;
    
    let firstLargest = arr[0]
    let secondLargest = arr[0]
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] > firstLargest) {
            secondLargest = firstLargest
            firstLargest = arr[i]
        }else if (arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest
}

console.log(secondlarg(arr1));