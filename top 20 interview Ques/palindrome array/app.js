function isPalindrome(word) {
function isReverse(str) {
    let reverse = ""

    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str [i];
    }
    return reverse
}
  let result = {}

  for (let i = 0; i < word.length; i++) {
    let wordResult = word[i]
    result [wordResult] = wordResult === isReverse(wordResult)

}

  return result
}

console.log(isPalindrome(["Java", "Python", "limit"]));