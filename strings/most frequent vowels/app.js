
var maxFreqSum = function(s) {
    let map = {}

    for(let i=0; i< s.length; i++) {
        if(!map[s[i]]) {
            map[s[i]] = 1
        } else {
            map[s[i]]++
        }
    }


    let vowels = ["a","e","i","o","u"]
    let maxVowels = 0
    let maxConsonent = 0

    for(let i=0; i<s.length; i++) {
        if(vowels.includes(s[i])) {
            if(map[s[i]] > maxVowels) {
                maxVowels = map[s[i]]
            } 
            }
             else {
                 if(map[s[i]] > consonent) {
                consonent = map[s[i]]
           
            }
        }
    }
    return maxVowels + maxConsonent
};