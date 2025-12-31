class LinkedList {
  head;
  tail;
  constructor() {}

  add(val) {
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      const newNode = new Node(val);
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  find(val) {
    let temp = this.head;

    while (temp != null) {
      if (temp.val == val) {
        return val;
      }
      temp = temp.next;
    }
    return -1;
  }

  update(val, newVal) {
    let temp = this.head;

    while (temp != null) {
      if (temp.val == val) {
        temp.val = newVal;
      }
      temp = temp.next;
    }
    return -1;
  }

  remove(val) {
    let temp = this.head;

    while (temp != null && temp.next != null) {
      if (temp.next.val == val) {
        temp.next = temp.next.next;
      }
      temp = temp.next;
    }
    return -1;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const myLinkedList = new LinkedList();
myLinkedList.add(1);
myLinkedList.add(2);
myLinkedList.add(3);
myLinkedList.add(4);
myLinkedList.remove(4);
myLinkedList.find(5);

myLinkedList.find(4);
