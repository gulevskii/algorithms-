/**
 * @param {string} str
 * @return {object | Array | string | number | boolean | null}
 */
function parse(str) {
  if (!str.length || str[0] === "'") throw ('Error') 
  if (str === 'true') return true 
  if (str === 'false') return false 
  if (str[0] === '"') return str.slice(1, str.length-1)
  if (+str == str) return +str 
  if (str === 'null') return null 
  if (str === '{}') return {}
  
  if (str[0] === '[') {
    return str.slice(1, str.length-1).split(',').map(parse)
  }

  if (str[0] === '{') {
    return str.slice(1, str.length-1).split(',').reduce((acc, cur) => {
      const index = cur.indexOf(':')
      const key = cur.slice(0, index)
      const value = cur.slice(index + 1);
      acc[parse(key)] = parse(value);
      return acc;
    }, {})
  }
}