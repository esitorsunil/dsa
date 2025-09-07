
function removeDuplicate(arr) {
    let result = []
    let index = 0

    for (let i=0; i < arr.length; i++) {
        let isDuplicate = false


    for (let j = 0; j < result.length; j++) {
        if(arr [i] === result [j]) {
            isDuplicate = true;
            break;
        }
    }
        if(!isDuplicate) {
            result[index] = arr[i]
            index++
        }
    }
   return result
}

console.log(removeDuplicate([1,2,4,5,6,6,3,2,3]))