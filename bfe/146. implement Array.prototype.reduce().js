

Array.prototype.myReduce = function (callback, item) {
  if (arguments.length==1 && !this.length) throw('Error')

  let acc = arguments.length==1 ? this[0] :  item
  let startIndex = arguments.length==1 ? 1 : 0

  for (let i=startIndex; i<this.length; i++) {
    if (this[i]) acc=callback(acc, this[i], i, this)
  }

  return acc
}

