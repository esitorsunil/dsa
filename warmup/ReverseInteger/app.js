function reverseInteger(x) {
    const isNegative = x < 0;
    x = Math.abs(x)
    
    let limit = Math.pow( 2, 31) - 1
    
    let reverse = 0
    
    while (x > 0) {
        let rem = x % 10
        reverse = 10 * reverse + rem
        
        x = Math.floor( x / 10)
    }
    if (reverse > limit) return 0
    
    return isNegative ? -reverse : reverse
}

console.log(reverseInteger(123))
console.log(reverseInteger(-123))
console.log(reverseInteger(1534236469)) 
console.log(reverseInteger(-3534236469)) 