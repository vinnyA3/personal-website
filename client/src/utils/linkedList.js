class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  addNode(val) {
    const newNode = new Node(val);

    if (!this.head && !this.tail) {
      this.head = this.tail = newNode;
      return;
    } else {
      if (this.head === this.tail) {
        this.head.next = newNode;
        this.tail = newNode;
        return;
      }
      const oldTail = this.tail;
      this.tail = newNode;
      oldTail.next = this.tail;
    }
  }
}

export default LinkedList;
