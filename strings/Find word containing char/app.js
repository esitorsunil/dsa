//Approach 1:
var findWordsContaining = function(words, x) {
    let res = []

    for (let i=0; i<words.length; i++) {
        if(words[i].includes(x)) {
            res.push(i);
        }
    }
    return res
};


// Approach 2


var findWordsContaining = function(words, x) {
    let res = []

    for (let i=0; i<words.length; i++) {
       for(let j=0; j<words[i].length; j++) {
        if(words[i][j] === x) {
            res.push(i);
            break;
        }
       }
     }
    return res
};