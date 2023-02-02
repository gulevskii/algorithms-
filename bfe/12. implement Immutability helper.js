

/**
 * @param {any} data
 * @param {Object} command
 */
function update(data, command) {
  for ([key,value] of Object.entries(command)) {
    switch(key) {
      case '$push':
        return [...data, ...value]
      case '$set':
        return value
      case '$merge':
        if (typeof data === 'object' && data !== null) {
          return {...data, ...value}
        } else {
           throw Error("bad merge");
        }
      case '$apply':
        return value(data)
      default:
        if (Array.isArray(data)) {
          data[key] = update(data[key], value)
          return data
        } else {
          return {
            ...data, 
            [key]: update(data[key], value)
          }
        }
    }
  }
}
