
/**
 * @param {any} target
 * @param {any[]} sources
 * @return {object}
 */
function objectAssign(target, ...sources) {
  if (!target) throw('error')
  if (typeof target !== 'object') {
    target = Object(target)
  }

  for (let source of sources) {
    if (source)
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
  }
  return target
}