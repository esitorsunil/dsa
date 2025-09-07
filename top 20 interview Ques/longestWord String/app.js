function longestWord (word) {

    word = word.match(/[a-zA-z0-9]+/gi)

    let longest = ""

    for (let i=0; i < word.length; i++ ) {
        if(word [i].length > longest.length) {
            longest = word [i]
        }
    }
    return longest
}

console.log(longestWord("This is speaking yeswsdadadsadasads"))