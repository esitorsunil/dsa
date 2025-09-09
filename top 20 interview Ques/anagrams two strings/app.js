function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    let countChar = {}

    for (let i=0; i<str1.length; i++) {
        let char = str1[i]

        countChar[char] = (countChar[char] || 0) + 1 
    }

    for (let i=0; i<str2.length; i++) {
        let char = str2[i]

        if (! countChar[char]) {
            return false
        }
        countChar[char]--
    }

    for (let key in countChar) {
        if(countChar[key] !== 0) {
            return false
        }
    }
    return true
}

console.log(areAnagrams("listen", "silent"))