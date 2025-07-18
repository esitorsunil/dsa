var EligibleVote = function(age) {
   if( age < 1) {
     console.log("Invalid input")
   }
   else if (age < 18) {
    console.log("Below 18, not eligible to vote")
   } else {
    console.log("Eligible to vote")
   }
}

EligibleVote(17);
EligibleVote(20);
EligibleVote(-1);