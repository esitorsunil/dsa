const arr1 = [4, 2, 0, 10, 8, 30, 3, 2];
const arr2 = [2, -9, 17, 0, 1, -10, -4, 8];
const arr3 = [5, 0, 10, 8, 17, 1, 5, 34];
const arr4 = [-5, -3, -5, -2, -434, -22];


// search for an elementt in an array
function findElement (arr, ele) {
    for (let i=0; i<arr.length; i++) {
        //Check if current element is equal to the element we're searching for
        if(arr[i] === ele) {
            return i;
        }
    }
     // If not found, return -1
  return -1;
}

console.log(findElement(arr1,10))
console.log(findElement(arr3,10))


//find negative count
function countNegative(arr) {
    let count = 0;
    for (let i=0; i<arr.length; i++){
        if(arr[i]<0) {
            count++
        }
    }
    return count
}

console.log(countNegative(arr2))
console.log(countNegative(arr4))


//Find the largest number
function findLargestNumber(arr) {
    // smallest number is at negative infinity
    let largest = arr[0]
     
     for(let i=0; i<arr.length; i++){
         if(arr[i] > largest){
             largest = arr[i]
         }
     }
     return largest
 }
 
 console.log(findLargestNumber(arr1))
 console.log(findLargestNumber(arr2))
 console.log(findLargestNumber(arr3))
 console.log(findLargestNumber(arr4))

 //find smallest 

function smallestNum(arr) {
    //  Assume the smallest element is at positive infinity
       let smallest = arr[0]
        
        for(let i=0; i<arr.length; i++){
            if(arr[i] < smallest) {
                smallest = arr[i]
            }
        }
        return smallest
    }
    console.log(smallestNum(arr2))

