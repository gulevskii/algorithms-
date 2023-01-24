
// This is a JavaScript coding problem from BFE.dev 
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  if (!depth) return arr 

  return arr.reduce((a,b) => {
    if (Array.isArray(b) && depth > 0) {
      return a.concat(flat(b,depth-1))
    } 
    return a.concat(b)
  }, [])
}

