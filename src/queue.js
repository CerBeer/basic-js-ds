const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  
  constructor() {
    this.queue = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.queue) {
      this.queue = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    let result = null;
    if (this.queue) {
      result = this.queue.value;
      this.queue = this.queue.next;
    }
    if (!this.queue) {
      this.tail = null;
    }
    return result;
  }
}

module.exports = {
  Queue
};

// function assertEqual(answer, trueAnswer) {
//   const answerStr = JSON.stringify(answer);
//   const trueAnswerStr = JSON.stringify(trueAnswer);
//   const reason = `${answerStr === trueAnswerStr}  `.slice(0, 6);
//   console.log(`is ${reason} : ${answerStr} = ${trueAnswerStr}`);
// }

// const queue = new Queue();
// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// assertEqual(queue.getUnderlyingList(), 6);
// assertEqual(queue.dequeue(), 5);
// assertEqual(queue.dequeue(), 6);
// assertEqual(queue.dequeue(), 7);
// assertEqual(queue.dequeue(), null);
// assertEqual(queue.getUnderlyingList(), 6);
