
/**
 * @param {number} base
 * @param {number} power - integer
 * @return {number}
 */
function pow(base, power){
  if(power === 0) return 1
  let result = base;
  for(let i=1; i<Math.abs(power); i++){
  result = result * base
  }
  return power > 0 ? result : 1/result 
}