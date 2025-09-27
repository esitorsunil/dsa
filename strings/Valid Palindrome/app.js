function ValidPalindrome(s) {
    let s = s.toLowerCase()
    let filteredString = ""
    let rev  = ""

    for(let i=0; i<s.length; i++) {
        if((charCodeAt()>= "a".charCodeAt() && charCodeAt() <= "z".charCodeAt()) || 
        (charCodeAt() >= "0".charCodeAt() && charCodeAt() <= "9".charCodeAt())) { 
       // if(s[i].match(/[a-z0-9]/i)) {
            filteredString += s[i]
            rev = s[i] + rev
        }
    }
    return filteredString == rev
}


// without using extra spaces

var isPalindrome = function(s) {
    s = s.toLowerCase();
    let i = 0;
    let j = s.length-1

    while(i<j) {
        if(!s[i].match(/[a-z0-9]/i)) {
            i++
        }else if (!s[j].match(/[a-z0-9]/i)) {
            j--
        }else if (s[i] == s[j]) {
            ++i; --j
        } else {
            return false
        }
    }
    return true
};