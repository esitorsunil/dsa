function nonRepeatingCharacter(str) {
    let frequency = {}

    for (let i=0; i< str.length; i++) {
        let char = str [i]
        if(frequency[char]) {
            frequency[char]++
        }else {
            frequency[char] = 1
        }

        for(let i=0; i< str.length; i++) {
            let char = str[i]
            if(frequency[char] === 1) {
                return char
            }
        }
    }
    return null
}

console.log(nonRepeatingCharacter("swiss"))