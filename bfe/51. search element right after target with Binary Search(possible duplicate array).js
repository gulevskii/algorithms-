
/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function elementAfter(arr, target){
  let left=0, right=arr.length-1
  while (left<=right) {
    const mid=Math.floor((left+right)/2)
    if (arr[mid] <= target) left=mid+1
    else right=mid-1
  }
  return left === 0 ? undefined : arr[left]
}
