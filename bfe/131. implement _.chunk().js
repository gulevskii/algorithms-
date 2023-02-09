
/** 
 * @param {any[]} items
 * @param {number} size
 * @returns {any[][]}
 */
function chunk(items, size) {
  if (size <= 0) return []
  const result = []
  let j=0
  for (let i=0; i<Math.ceil(items.length/size); i++) {
    const currentChunk = []
    let currentSize = 0
    while (j<items.length && currentSize<size) {
      currentChunk.push(items[j++])
      currentSize++
    }
    result.push(currentChunk)
  }
  return result
}