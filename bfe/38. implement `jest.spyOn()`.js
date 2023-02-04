
/**
 * @param {object} obj
 * @param {string} methodName
 */
function spyOn(obj, methodName) {
  const calls = []
  const originMethod = obj[methodName]
  
  if (typeof originMethod !== 'function') {
    throw new Error('not function')
  }
  
  obj[methodName] = function(...args) {
    calls.push(args)
    return originMethod.apply(this, args)
  }
  
  return { calls }
}