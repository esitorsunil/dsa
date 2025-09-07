function isPalindrome(str)  {
    function reverse (arr) {
        let reversed = "";

        for (let i = arr.length-1; i >= 0; i--) {
            reversed += arr [i];
        }
        return reversed
    }
    const cleanedStr = str
    return cleanedStr === reverse(cleanedStr) 
}

console.log(isPalindrome(["Java" , "Python" , "limit"]))