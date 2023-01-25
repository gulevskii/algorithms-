
// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */
function throttle(func, wait) { 
  let timeout = false
  let lastArgs = null

  return function(...args) {
    if (timeout) {
      lastArgs = args
    } else {
      timeout = true
      func.apply(this, args)

      setTimeout(()=> {
        if (lastArgs) {
          func.apply(this, lastArgs)
        }

        timeout = false
        lastArgs = null
      }, wait)
    }
  }
}
