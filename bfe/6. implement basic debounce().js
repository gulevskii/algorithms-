
// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait) {
  let timeout = null
  return function(...args) {
    clearTimeout(timeout)
    timeout=setTimeout(() => func.apply(this, args), wait)
  }
}
