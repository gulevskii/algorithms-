
/**
 * @param {HTMLElement | null} root
 * @return {HTMLElement[]}
 */
function flatten(root) {
  const arr = []
  if (!root) return arr
  let queue = [root]

  while (queue.length) {
    const next = []
    for (let i=0; i<queue.length; i++) {
      arr.push(queue[i])
      queue[i]?.children && next.push(...queue[i].children)
    }
    queue = next
  }
  return arr
}