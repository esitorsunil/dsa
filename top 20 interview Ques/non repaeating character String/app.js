function nonRepeatingCharacter(str) {
    let frequency = {}

    for (let char of str) {
        if(frequency[char]) {
            frequency[char]++
        }else {
            frequency[char] = 1
        }

        for(let char of str) {
            if(frequency[char] === 1) {
                return char
            }
        }
    }
    return null
}

console.log(nonRepeatingCharacter("swiss"))