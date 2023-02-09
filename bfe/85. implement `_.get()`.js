/**
 * @param {object} source
 * @param {string | string[]} path
 * @param {any} [defaultValue]
 * @return {any}
 */
function get(obj, path, defaultValue = undefined) {
  if (!path.length) return defaultValue
  if(!Array.isArray(path))path=path.split('.')

  for (let p of path) {
    if (p.includes('[')) {
      const key = p.slice(0,p.indexOf('['))
      const index = p.slice(p.indexOf('[')+1, p.length-1)
      obj=obj[key][index]
    } else if (obj[p]) obj=obj[p]
    else return defaultValue
  }
  return obj
}