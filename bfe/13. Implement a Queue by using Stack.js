/* you can use this Class which is bundled together with your code

class Stack {
  push(element) { // add element to stack }
  peek() { // get the top element }
  pop() { // remove the top element}
  size() { // count of element }
}
*/

/* Array is disabled in your code */

// you need to complete the following Class
class Queue {

  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(element) { 
    // add new element to the rare
    while (this.stack1.size()) {
      this.stack2.push(this.stack1.pop())
    }

    this.stack1.push(element)

    while (this.stack2.size()) {
      this.stack1.push(this.stack2.pop())
    }
  }
  peek() { 
    // get the head element
    return this.stack1.peek()
  }
  size() { 
    // return count of element
    return this.stack1.size()
  }
  dequeue() {
    // remove the head element
    return this.stack1.pop()
  }
}