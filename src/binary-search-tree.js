const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.treeRoot = null;
    this.treeSet = new Set();
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    const newNode = new Node(data);
    this.treeSet.add(data);
    if (!this.treeRoot) {
      this.treeRoot = newNode;
    } else {
      const [prev, curr] = this.findPrevCurr(data);
      if (!curr) {
        if (data < prev.data) {
          prev.left = newNode;
        } else {
          prev.right = newNode;
        }
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    const [prev, curr] = this.findPrevCurr(data);
    return curr;
  }

  findPrevCurr(data) {
    let prev = null;
    let curr = this.treeRoot;
    while (curr) {
      if (curr.data === data) {
        break;
      } else {
        prev = curr;
        if (data < curr.data) {
          curr = curr.left;
        } else {
          curr = curr.right;
        }
      }
    }
    return [prev, curr];
  }

  remove(data) {
    this.treeSet.delete(data);
    this.treeRoot = null;
    this.treeSet.forEach((val) => this.add(val));
  }

  min() {
    let curr = this.treeRoot;
    if (!curr) return null;
    while (curr.left) {
        curr = curr.left;
    }
    return curr.data
  }

  max() {
    let curr = this.treeRoot;
    if (!curr) return null;
    while (curr.right) {
        curr = curr.right;
    }
    return curr.data
  }
}

module.exports = {
  BinarySearchTree
};

function assertEqual(answer, trueAnswer) {
  const answerStr = JSON.stringify(answer);
  const trueAnswerStr = JSON.stringify(trueAnswer);
  const reason = `${answerStr === trueAnswerStr}  `.slice(0, 6);
  console.log(`is ${reason} : ${answerStr} = ${trueAnswerStr}`);
}

// let tree = new BinarySearchTree();
// tree.add(2);
// tree.add(3);
// tree.add(4);
// assertEqual(tree.root().data, 2);

// tree = new BinarySearchTree();
// tree.add(2);
// tree.add(7);
// tree.add(1);
// tree.add(8);
// tree.add(4);
// tree.add(32);
// tree.add(12);
// tree.add(14);
// assertEqual(tree.find(8).data, 8);
// assertEqual(tree.find(2).data, 2);
// assertEqual(tree.find(32).data, 32);
// assertEqual(tree.find(14).data, 14);

// tree = new BinarySearchTree();
// tree.add(2);
// tree.add(7);
// tree.add(1);
// tree.add(8);
// tree.add(4);
// tree.add(32);
// tree.add(12);
// tree.add(14);
// assertEqual(tree.find(33), null);
// assertEqual(tree.find(1337), null);
// assertEqual(tree.find(42), null);

// tree = new BinarySearchTree();
// tree.add(9);
// tree.add(14);
// tree.add(2);
// tree.add(6);
// tree.add(128);
// tree.add(8);
// tree.add(31);
// tree.add(54);
// tree.add(1);
// tree.remove(14);
// tree.remove(8);
// tree.remove(9);
// assertEqual(tree.has(14), false);
// assertEqual(tree.has(8), false);
// assertEqual(tree.has(9), false);
// assertEqual(tree.has(2), true);
// assertEqual(tree.has(6), true);
// assertEqual(tree.has(128), true);
// assertEqual(tree.has(31), true);
// assertEqual(tree.has(54), true);
// assertEqual(tree.has(1), true);

// console.log('min works correctly');
// tree = new BinarySearchTree();
// tree.add(9);
// tree.add(14);
// tree.add(54);
// tree.add(2);
// tree.add(6);
// tree.add(8);
// tree.add(31);
// tree.add(1);
// tree.remove(6);
// tree.remove(2);
// assertEqual(tree.min(), 1);

// console.log('max works correctly');
//   tree = new BinarySearchTree();
//   tree.add(9);
//   tree.add(14);
//   tree.add(54);
//   tree.add(2);
//   tree.add(6);
//   tree.add(8);
//   tree.add(31);
//   tree.add(1);
//   tree.remove(6);
//   tree.remove(2);
//   assertEqual(tree.max(), 54);
