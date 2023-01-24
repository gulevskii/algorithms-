
/**
 * @param {string} str - roman numeral string
 * @returns {number} integer
 */
function romanToInteger(str) {
  const s = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let ans = 0

  for (let i=0; i<str.length; i++) {
    if (i+1<str.length && s[str[i+1]]>s[str[i]]) {
      ans+=s[str[i+1]]-s[str[i]]
      i++
    } else {
      ans+=s[str[i]]
    }
  }

  return ans
}