/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
  const M = grid.length, N = grid[0].length
  const ans = new Array(M).fill().map(() => new Array(N).fill(null))
   
  for (let r=0; r<M; r++) {
    for (let c=0; c<N; c++) {
      const newVal = ((r*N+c)+k) % (M*N)
      const newRow = Math.floor(newVal/N)
      const newCol = Math.floor(newVal%N)
      ans[newRow][newCol] = grid[r][c]
    }
  }

  return ans
};