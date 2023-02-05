
/**
 * @param {string} str
 * @return {number}
 */
function countPalindromicSubstr(str) {
  let ans = 0
  
  for (let i=0; i<str.length; i++) {
    helper(i, i)
    helper(i, i+1)

  }

  function helper(left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--
      right++
      ans++
    }
  }
  return ans
}