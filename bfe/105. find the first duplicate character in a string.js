/**
 * @param {string} str
 * @return {string | null}
 */
function firstDuplicate(str) {
  const seen = new Set()
  for (let char of str) {
    if (seen.has(char)) return char 
    seen.add(char)
  }
  return null
}