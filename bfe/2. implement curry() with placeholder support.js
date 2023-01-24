
// This is a JavaScript coding problem from BFE.dev 

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function curried(...args) {
    const isComplete = args.length >= fn.length && !args.slice(0,fn.length).includes(curry.placeholder)
    if (isComplete) {
      return fn.apply(this, args)
    }
    
    return function(...newArgs) {
      const res = args.map(arg => arg === curry.placeholder && newArgs.length ? newArgs.shift() : arg)
      return curried(...res, ...newArgs)
    }
  }
}