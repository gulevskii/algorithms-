
/**
 * @param {number} num - integer
 * @return {number} count of 1 bit
 */
function countOne(num) {
  return num.toString(2).replace(/0/g,'').length
}