
/**
 * @param {number[]} arr
 * @return {number}
 */
function largestDiff(arr) {
  if (arr.length <= 1) return 0
  let min=Infinity,max=-Infinity
  for (let i=0; i<arr.length; i++) {
    min=Math.min(min,arr[i])
    max=Math.max(max,arr[i])
  }
  return Math.abs(max-min)
}