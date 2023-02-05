
/**
 * @param {string} str
 * @return {boolean} 
 */
function validate(str) {
  const stack = []

  for (let i=0; i<str.length; i++) {
    if ('{[('.includes(str[i])) stack.push(str[i])
    else if (str[i] === '}'){
      if (!stack.length || stack.pop() !== '{') return false
    } else if (str[i] === ']') {
      if (!stack.length || stack.pop() !== '[') return false
    } else if (str[i] === ')') {
      if (!stack.length || stack.pop() !== '(') return false
    }
  }
  return !stack.length
}