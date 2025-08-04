function reverseString(s) {

  // Loop through the first half of the array and swap characters symmetrically
  for (let i = 0; i < Math.floor(s.length / 2); i++) {

    // Store the character at the current index temporarily
    let temp = s[i];

    // Replace the character at the current index with the character from the opposite end
    s[i] = s[s.length - 1 - i];

    // Place the stored character at the opposite end
    s[s.length - 1 - i] = temp;
  }

  // Return the reversed array
  return s;
}


console.log(reverseString(["h", "e", "l", "l", "o"])); // Output: ['o','l','l','e','h']
console.log(reverseString(["H", "a", "n", "n", "a", "h"])); // Output: ['h','a','n','n','a','H']



//Time Complexity: O(n) Each element is visited at most once (only the first half), so it's linear with respect to the length of the array.
//Space Complexity: O(1) Only a single temporary variable is used for swapping.
//two pointer approach
//in place reversal