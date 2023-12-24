const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let root = l;
  let prev = null;
  let curr = l;
  while (curr) {
    if (curr.value === k) {
      if (!prev) {
        root = curr.next;
      } else {
        prev.next = curr.next;
      }
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
  return root;
}

module.exports = {
  removeKFromList
};

// function convertArrayToList(arr) {
//   return arr.reverse().reduce((acc, cur) => {
//     if (acc) {
//       const node = new ListNode(cur);
//       node.next = acc;
//       return node;
//     }

//     return new ListNode(cur);
//   }, null);
// }

// function assertEqual(answer, trueAnswer) {
//   const answerStr = JSON.stringify(answer);
//   const trueAnswerStr = JSON.stringify(trueAnswer);
//   const reason = `${answerStr === trueAnswerStr}  `.slice(0, 6);
//   console.log(`is ${reason} : ${answerStr} = ${trueAnswerStr}`);
// }

// const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);
// const expected = convertArrayToList([1, 2, 4, 5]);
// assertEqual(removeKFromList(initial, 3), expected);

// const initial = convertArrayToList([1, 2, 3, 3, 4, 5]);
// const expected = convertArrayToList([1, 2, 4, 5]);
// assertEqual(removeKFromList(initial, 3), expected);
