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