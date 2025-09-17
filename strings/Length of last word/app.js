// Approach 1 : built in function



function LengthofLastWord(s) {
  let n = s.length - 1

  s = s.trim()
  s = s.split(" ")

  return s[s.length - 1].length
}


//Approach 2 : best parctice without in-built func

function LengthofLastWord(s) {
  let n = s.length - 1

  while (n >=0 ) {
    if(n == " ") {
      --n
    }else {
      break;
    }
  }

  let count = 0

  while(n>=0) {
    if(n !== " ") {
      count++
    }else {
      break
    } 
  }
  return count
}