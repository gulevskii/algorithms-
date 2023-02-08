/**
 * @param {number[]} arr1 - integers
 * @param {number[]} arr2 - integers
 * @returns {number[]}
 */
function intersect(arr1, arr2) {
  const ans = []
  let l=0,r=0
  while (l<arr1.length && r<arr2.length) {
    if (arr1[l] === arr2[r]) {
      ans.push(arr1[l])
      l++ 
      r++
    }
    else if (arr1[l] > arr2[r]) r++
    else l++
  }
  return ans
}