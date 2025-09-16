// arr = [0,1,3]

// math formula = n(n+1)/2

function missingNumber(nums) {
  let n = nums.length;

  let totalSum = n(n+1)/2
  let ArraySum = 0

  for(let i=0; i<n; i++) {
    ArraySum = ArraySum + arr[i]
  }
  return totalSum - ArraySum
}