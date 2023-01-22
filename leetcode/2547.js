/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCost = function(nums, k) {
  let n = nums.length;
  const dp = Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i=0; i<n; i++) {
    let count = new Map()
    let uniq = 0
    for (let j=i; j>=0; j--) {
      let currentCount = count.get(nums[j]) || 0
      
      if (currentCount === 0) {
        uniq++
      } else if (currentCount === 1) {
        uniq--
      }

      count.set(nums[j], currentCount+1)
      let nonUnique = (i-j+1) - uniq
      let cost = k + nonUnique
      dp[i + 1] = Math.min(dp[i + 1], cost + dp[j]);
    }
  }

  return dp[n]
}