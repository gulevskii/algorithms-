/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */
function sort(items, newOrder) {
  for (let i=0; i<items.length; i++) { 
    while (i !== newOrder[i]) {
      const tmp = items[i]
      items[i] = items[newOrder[i]]
      items[newOrder[i]] = tmp

      const temp = newOrder[i]
      newOrder[i] = newOrder[newOrder[i]]
      newOrder[temp] = temp
    }
  }  
}