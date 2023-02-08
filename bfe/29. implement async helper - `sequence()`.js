
/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function sequence(funcs){
 const funcsQueue = [...funcs];
  
  return function run(finalCB, data) {
    if (funcsQueue.length === 0) {
      finalCB(undefined, data);
      return;
    }
    
    const currF = funcsQueue.shift();
    
    const cb = (error, num) => {
      if (error) {
        finalCB(error, num);
        return
      }
      
      run(finalCB, num);
    };
    
    currF(cb, data);
  };
}