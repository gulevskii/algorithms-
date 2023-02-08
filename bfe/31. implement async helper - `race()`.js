/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function race(funcs){
  let finished = false 
  return function(callback) {
    const callbackWrapper = (...args) => {
      if (finished) return 
      callback(...args)
      finished = true 
    }

    funcs.forEach(fn => fn(callbackWrapper))
  }
}