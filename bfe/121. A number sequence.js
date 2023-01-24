
/**
 * @param {number} n - integer
 * @returns {string}
 */
function getNthNum(n) {
  const dfs = (cur, lvl) => {
    if (lvl===1) return cur.join('')
    const next = []

    for (let i=0; i<cur.length; i++) {
      let count = 0
      while (i+1<cur.length && cur[i]===cur[i+1]) {
        count++
        i++
      }
      if (count === 0) {
        next.push(...[1, cur[i]])
      } else {
        next.push(...[count+1,cur[i-1]])
      }
    }
    return dfs(next, lvl-1)
  }

  return dfs([1], n)
}
