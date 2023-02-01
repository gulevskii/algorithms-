/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  let ans = [-1,-1]
  const dfs = function(node, depth) {
    if (!node) return

    const left = dfs(node.left,depth+1)
    if (!left && ans[1] < depth) ans = [node.val, depth] 
    dfs(node.right, depth+1)
  } 

  dfs(root, 0)
  return ans[0]
};