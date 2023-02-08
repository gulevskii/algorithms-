

/**
 * @param {number[]} arr
 * @returns number
 */
function findSingle(arr) {
  return arr.reduce((acc, cur) => acc^=cur)
}

