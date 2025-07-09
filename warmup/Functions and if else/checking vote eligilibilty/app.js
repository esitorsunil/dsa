var EligibleVote = function(age) {
   if (age >= 18) {
    return "Eligible to vote"
   } else {
    return "Below 18, not eligible to vote"
   }
}

console.log(EligibleVote(19));
console.log(EligibleVote(17));