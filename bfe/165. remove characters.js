

/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
  input=input.replace(/b/g, '')
  while (input.includes('ac')) {
    input=input.replace(/ac/g, '')
  }
  return input
}


function removeChars(input) {
  const stack = []

  for (let i = 0; i < input.length; i++) {
    const character = input[i]
    if (stack.length && character === 'c' && stack[stack.length - 1] === 'a') {
      stack.pop()
    } else if (character !== 'b') {
      stack.push(character)
    }
  }

  return stack.join('')
}