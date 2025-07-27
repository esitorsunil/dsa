function countDigit(n) {
    
    if( n == 0) return 1
    // negative value to count
    n = Math.abs(n)
    
    let count = 0
    
    while ( n > 0) {
        n = Math.floor (n / 10)  // 123.4 , 123 , 12.3, 12, 1.2, 1..
        count++
    }
    return count
}

console.log(countDigit(1234))
console.log(countDigit(-12304))