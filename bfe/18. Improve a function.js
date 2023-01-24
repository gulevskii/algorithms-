
/**
 * @param {object[]} items
 * @excludes { Array< {k: string, v: any} >} excludes
 */

/**
 * @param {object[]} items
 * @param { Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */
function excludeItems(items, excludes) {
  return items.filter(item => {
    for (let exc of excludes) {
      const key = exc.k 
      const val = exc.v 
      if (item[key] && item[key] === val) {
        return false
      }
    }
    return true
  })
}