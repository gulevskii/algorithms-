/**
 * @param {number} n - non-negative integer
 * @return {number}
 */
function fib(n) {
  if (n < 2) return n
  let dp = [0,1]
  for (let i=0; i<=n-2; i++) {
   [dp[0],dp[1]] = [dp[1], dp[0]+dp[1]]
  }
  return dp.pop()
}
