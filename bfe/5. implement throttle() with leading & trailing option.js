

// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function throttle(fn, wait, option = {leading: true, trailing: true}) {
  let prevArgs = null
  let timer = null
  const {trailing, leading} = option

  return function(args) {
    if (timer) {
      prevArgs = args
    } else if (!timer) {
      if (leading) {
        fn.call(this, ...args)
      }  

      function setTimer() {
          if (prevArgs && trailing) {
            fn.call(this, ...prevArgs)
            prevArgs = null
            timer = setTimeout(setTimer, wait)
          } else {
            timer = null
          }
      }

      timer = setTimeout(setTimer, wait)
    }
  }
}
