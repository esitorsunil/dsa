
// Approach 1: hashmap space Cpmplexity 0(n)

var singleNumber = function(nums) {
  let hash = {}

  for(let i=0; i<nums.length; i++) {
      if(!hash[nums[i]]) {
          hash[nums[i]] = 1
      }else {
          hash[nums[i]]++
      }
  }
  for(let i=0; i<nums.length; i++) {
      if(hash[nums[i]] == 1) {
          return nums[i]
      }
  }
};


// Approach2 : Bitwise XOR space complexity 0(1)

var singleNumber = function(nums) {
  let x = 0

  for(let i=0; i<nums.length; i++) {
    x = x ^ nums[i]
  }
  return x
};