function palindromeDigit (x) {
    
    if (x < 10 && x >= 0) return true
    if (x < 0) return false
    
    const num = x
    let reverse = 0
    
    while (x > 0) {
        let rem = x% 10
        reverse = 10 * reverse + rem
        
        x = Math.floor(x/10)
    }
    return num == reverse
}

console.log(palindromeDigit(1))
console.log(palindromeDigit(131))
console.log(palindromeDigit(-131))
console.log(palindromeDigit(0))