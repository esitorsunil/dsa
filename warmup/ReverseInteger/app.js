//leetcode 7. Reverse Integer

// x % 10 = 3 
// x % 10 = 2
// x % 10 = 1 


// Math.floor(x / 10) = 12 x / 10 = 12

// 0 * 10 + 3 = 3
// 3 * 10 + 2 = 32
// 32 * 10 + 1 = 321

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
console.log(reverseInteger(120))
console.log(reverseInteger(1534236469)) 
console.log(reverseInteger(-3534236469)) 