
function cloneDeep(obj, map = new Map()) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (map.has(obj)) return map.get(obj)

  const output = Array.isArray(obj) ? [] : {}
  map.set(obj, output)
  const keys = [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)]

  for (let key of keys) {
    output[key] = cloneDeep(obj[key], map)
  }

  return output
}