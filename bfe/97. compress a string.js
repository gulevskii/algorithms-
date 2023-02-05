
/**
 * @param {string} str
 * @return {string}
 */
function compress(str) {
  if (!str.length) return str
  const ans = []
  let count = 1, prev = str[0]
  for (let i=1; i<=str.length; i++) {
    if (str[i] === prev) count++
    else {
      ans.push(`${prev}${count > 1 ? count : ''}`)
      count = 1
      prev = str[i]
    }
  }
  return ans.join('')
}