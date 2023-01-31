/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let left=0,right=n

  while (left<=right) {
    const mid = Math.floor((left+right)/2)
    const val = mid * (mid+1) / 2

    if (val === n) return mid
    if (n < val) {
      right = mid-1
    } else {
      left = mid+1
    }
  }

  return right
};

