function removeElement(nums, val) {
  // Initialize a pointer to track the position for placing non-matching elements
  let x = 0;

  // Iterate through each element of the array
  for (let i = 0; i < nums.length; i++) {
    // If the current element is not equal to the target value
    if (nums[i] !== val) {
      // Place the non-matching element at the current pointer position
      nums[x] = nums[i];
      // Move the pointer forward
      x += 1;
    }
  }

  // Return the count of elements that are not equal to the target value
  return x;
}

console.log(removeElement([3, 2, 2, 3], 3)); // Output: 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // Output: 5


//Time Complexity: O(n) One pass through the array.

//Space Complexity: O(1) No extra space used; modifies array in-place.