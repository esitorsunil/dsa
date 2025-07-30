function removeDuplicates(nums) {
    // Initialize a pointer to track the position of the last unique element
    let x = 0;
  
    // Iterate through the array starting from index 1
    for (let i = 1; i < nums.length; i++) {
      // If the current element is different from the last unique element
      if (nums[i] > nums[x]) {
        x += 1; // Move the pointer forward
        nums[x] = nums[i]; // Overwrite the duplicate with the new unique value
      }
    }
  
    // Return the count of unique elements (index + 1)
    return x + 1;
  }


  console.log(removeDuplicates([1, 1, 2])); // Output: 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5