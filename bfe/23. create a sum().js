/**
 * @param {number} num
 */
function sum(num) {  
  function fn(arg) {    
    return sum(arg+num)
  }

  fn.toString =function() {
    return num
  }

  return fn
}
