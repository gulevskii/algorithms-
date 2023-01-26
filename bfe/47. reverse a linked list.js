/** 
 * class Node {
 *  new(val: number, next: Node);
 *    val: number
 *    next: Node
 * }
 */

/**
 * @param {Node} list
 * @return {Node} 
 */
const reverseLinkedList = (list) => {
    let node = list 
    let prev = null
    while (node) {
        [node.next, prev, node] = [prev, node, node.next]
    }
    return prev
}