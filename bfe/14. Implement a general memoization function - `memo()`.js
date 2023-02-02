

/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver = (...args) => [...args].join('#')) {
  const cache = new Map()

  return function(...args) {
    const key = resolver(...args)
    if (cache.has(key)) return cache.get(key)

    const result = func.call(this, ...args)
    cache.set(key, result)
    
    return result
  }
 }

