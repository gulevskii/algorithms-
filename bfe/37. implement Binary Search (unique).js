
/**
 * @param {number[]} arr - ascending unique array
 * @param {number} target
 * @return {number}
 */
function binarySearch(arr, target){
  let lo=0, hi=arr.length-1
  while (lo<=hi) {
    const mid = Math.floor((lo+hi)/2)
    if (arr[mid] == target) return mid
    else if (arr[mid] > target) {
      hi=mid-1
    } else {
      lo = mid+1
    }
  }
  return -1
}
