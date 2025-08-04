function maxProfit(prices) {
  // Initialize the minimum price to the first day's price
  let minPrice = prices[0];

  // Initialize the maximum profit to 0
  let maxProfit = 0;

  // Start iterating from the second price
  for (let i = 1; i < prices.length; i++) {
    // Calculate the potential profit by selling at current price and buying at the minimum price seen so far
    if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }

    // Update the minimum price if the current price is lower
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
  }

  // Return the maximum profit found
  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0


//Time Complexity: O(n) Only one pass through the array is required.

//Space Complexity: O(1) Only two variables (minPrice, maxProfit) are used.