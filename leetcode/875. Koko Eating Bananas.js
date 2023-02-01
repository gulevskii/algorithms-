/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  if (piles.length === 1) return Math.ceil(piles[0] / h)
  let lo=1, hi=Math.max(...piles)
  let ans = Infinity
  while (lo <= hi) {
    const pivot = Math.floor((lo+hi)/2)
    let count = 0
    for (let i=0; i<piles.length; i++) {
      count+=Math.ceil(piles[i]/pivot)
    }
    if (count <= h) ans=Math.min(ans,pivot)
    if (count <= h) {
      hi=pivot-1
    } else {
      lo=pivot+1
    }
  }

  return ans
};