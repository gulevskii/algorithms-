
/**
 * @param {number[]} arr
 * @return {number[]}
 */
function findTwo(arr) {
  const map = new Map()

  for (let i=0; i<arr.length; i++) {
    if (map.has(Math.abs(arr[i]))) {
      return [map.get(Math.abs(arr[i])),i]
    } else {
      map.set(Math.abs(arr[i]),i)
    }
  }
  return null
}