

// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait, option = {leading: false, trailing: true}) {
  let timer = null 
  let hasCalled = false
  const {leading, trailing} = option

  return function fn(...args) {
    if (leading && !timer && !hasCalled) {
      func.call(this, ...args)
      hasCalled = true
    } else {
      clearTimeout(timer)

      timer = setTimeout(() => {
        timer = null
        hasCalled = false
        if (trailing) func.call(this, ...args)
      }, wait)
    }
  }
}