
/**
 * @param {any} data
 * @return {string}
 */
function detectType(data) {
  let mapTypeToName = new Map([
  [Map, 'map'],
  [Array, 'array'],
  [ArrayBuffer, 'arraybuffer'],
  [Set, 'set'],
  [Date, 'date'],
  [Function, 'function'],
  [Number, 'number'],
  [String, 'string'],
  [Boolean, 'boolean']
  ]);

  if (typeof data !== 'object') {
    return typeof data
  } 

  if (data === null) {
    return 'null'
  }

  for (let [type, value] of mapTypeToName){
    if (data instanceof type) {
      return value
    }
  }

  return 'object'
}