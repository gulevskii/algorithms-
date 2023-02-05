
function count(str) {
  const map = new Map()

  for (let i=0; i<str.length; i++) {
    if (map.has(str[i])) map.set(str[i], map.get(str[i])+1)
    else map.set(str[i], 1)
  }  

  const max = Math.max(...map.values());

  const ans = []
  for (let [key,val] of map) {
    if (val === max) ans.push(key)
  }
  return ans.length > 1 ? ans : ans.join('')
}


