/**
 * @param {Array<(arg: any) => any>} funcs 
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
	return function (arg) {
		return funcs.reduce((acc, fn) => acc = fn(acc), arg)
	}
}