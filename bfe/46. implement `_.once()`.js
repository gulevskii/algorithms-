/**
 * @param {Function} func
 * @return {Function}
 */
function once(func) {
  let hasColed = false
  let prevResult = null
  return function(...args) {
    if (hasColed) return prevResult
    hasColed=true
    prevResult=func.call(this, ...args)
    return prevResult
  }
}