
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
function parallel(funcs){
  let doneWithError, result = [], done = 0
  return function (callback) {
    const callbackWrapper = (err, data) => {
      if (doneWithError) {
        return 
      }

      if (err) {
        doneWithError = err 
        callback(err,data)
        return 
      }

      done++
      result.push(data)
      if (done === funcs.length) {
        callback(undefined, result)
      }
    }

    funcs.forEach(fn => fn(callbackWrapper))
  }
}