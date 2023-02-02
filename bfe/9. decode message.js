

// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {string[][]} message
 * @return {string}
 */
function decode(message) {
  if (!message.length) return ''
  
  let row=0, col=0
  let goDown = true
  const ans = []

  while (col<message[0].length) {
    if (row === message.length-1) {
      goDown=false
    } else if (row === 0 && !goDown) {
      goDown = true
    }

    if (goDown) {
      ans.push(message[row++][col++])
    } else {
      ans.push(message[row--][col++])
    }
  }

  return ans.join('')
}




