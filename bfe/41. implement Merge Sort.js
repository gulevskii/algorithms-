
/**
 * @param {number[]} arr
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr 
  const pivot = Math.floor(arr.length / 2)
  const left = arr.slice(0,pivot)
  const right = arr.slice(pivot)
  mergeSort(left)
  mergeSort(right)
  let l=0, r=0
  while (l<left.length || r<right.length) {
    if ((l < left.length && left[l] <= right[r]) || r === right.length) {
      arr[l+r] = left[l++]
    } else {
      arr[l+r] = right[r++]
    }
  }
}
