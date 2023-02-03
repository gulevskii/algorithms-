
/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function firstIndex(arr, target){
  let l=0,r=arr.length-1
  let ans = -1
  while (l<=r) {
    const mid = Math.floor((l+r)/2)
    if (arr[mid] === target) ans=mid
    if (arr[mid] >= target) r=mid-1
    else l=mid+1
  }
  return ans
}
