
/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function lastIndex(arr, target){
  let l=0,r=arr.length-1
  let ans = -1
  while (l<=r) {
    const mid = Math.floor((l+r)/2)
    if (arr[mid] === target) ans=mid
    if (arr[mid] <= target) l=mid+1
    else r=mid-1
  }
  return ans 
}
