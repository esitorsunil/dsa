function countOccurance(str) {
    let result = {}

    for(let i=0; i < str.length; i++) {
        let char = str [i].toLowerCase();

        if (char !== " ") {
        if(result[char]) {
            result[char]++
        } else {
            result[char] = 1
        }
      }
    }
    return result
}

console.log (countOccurance("This is speaking"))