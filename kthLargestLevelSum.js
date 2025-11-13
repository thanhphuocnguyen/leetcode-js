/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

class ListNode {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(val) {
    if (!this.head) {
      this.head = new ListNode(val);
      this.tail = this.head;
    } else {
      this.tail.next = new ListNode(val);
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    if (!this.head) {
      return null;
    } else {
      const val = this.head.val;
      this.head = this.head.next;
      return val;
    }
  }

  empty() {
    return this.head === this.tail;
  }
}

class MinHeap {
  constructor() {
    this.items = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 1;
  }

  swap(i, j) {
    [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
  }

  push(value) {
    this.items.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.items.length - 1;
    while (idx > 0) {
      parentIdx = this.getParentIndex(idx);
      if (this.items[idx] < this.items[parentIdx]) {
        this.swap(parentIdx, idx);
        idx = parentIdx;
      } else {
        break;
      }
    }
  }

  pop() {
    if (this.items.length === 0) {
      return null;
    }
    if (this.items.length === 1) {
      return this.items.pop(); // Only one element, just pop it
    }
    let val = this.items[0];
    this.items[0] = this.items.pop();
    this.bubbleDown();
    return val;
  }

  bubbleDown() {
    let idx = 0;
    let len = this.items.length;
    while (this.getLeftChildIndex(idx) < len) {
      let leftIdx = this.getLeftChildIndex(idx);
      let rightIdx = this.getRightChildIndex(idx);
      let smallerChildIdx = leftIdx;
      if (rightIdx < len && this.items[rightIdx] < this.items[leftIdx]) {
        smallerChildIdx = rightIdx;
      }
      if (this.items[idx] > this.items[smallerChildIdx]) {
        this.swap(idx, smallerChildIdx);
        idx = smallerChildIdx;
      } else {
        break;
      }
    }
  }

  len() {
    return this.items.length;
  }

  peek() {
    return this.items[0] || null;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
var kthLargestLevelSum = function (root, k) {
  if (!root) {
    return 0;
  }
  const q = new Queue();
  q.enqueue(root);
  let level = 0;
};

function testQueue() {
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  console.log(q.dequeue());
}

testQueue();
