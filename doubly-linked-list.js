class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** DoublyLinkedList: chained together nodes. */

class DoublyLinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    if (this.length < 1) {
      this.push(val);
    } else {
      const newNode = new Node(val);
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length += 1;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length == 0) {
      throw "List is empty";
    }
    if (this.length == 2) {
      this.head = this.tail.prev;
      const formerTail = this.tail;
      this.tail = this.head;
      this.length -= 1;
      return formerTail.val;
    } else if (this.length == 1) {
      const formerTail = this.tail;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return formerTail.val;
    } else {
      const formerTail = this.tail;
      this.tail = this.tail.prev;
      this.length -= 1;
      return formerTail.val;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length == 0) {
      throw "List is empty";
    }
    const formerHead = this.head;
    this.head = this.head.next;
    this.length -= 1;
    if (this.length == 1) {
      this.tail = this.head;
    }
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return formerHead.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx > this.length - 1) {
      throw "Invalid Index";
    }
    if (idx == this.length - 1) {
      return this.tail.val;
    }
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i == idx) {
        return currentNode.val;
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx > this.length - 1) {
      throw "Invalid Index";
    }
    if (idx == 0) {
      this.head.val = val;
      return;
    }
    if (idx == this.length - 1) {
      this.tail.val = val;
      return;
    }
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i == idx - 1) {
        const newNode = new Node(val);
        newNode.next = currentNode.next.next;
        currentNode.next = newNode;
        this.length += 1;
        return;
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || (idx > this.length && idx != 0)) {
      throw "Invalid Index";
    }
    if (idx == 0) {
      this.unshift(val);
      return;
    }
    if (idx == this.length) {
      this.push(val);
      return;
    }
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i == idx - 1) {
        const newNode = new Node(val);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length += 1;
        return;
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx > this.length - 1) {
      throw "Invalid Index";
    }
    if (idx == 0) {
      this.shift();
      return;
    }
    if (idx == this.length - 1) {
      this.pop(val);
      return;
    }
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i == idx - 1) {
        currentNode.next = currentNode.next.next;
        this.length -= 1;
        return;
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let currentNode = this.head;
    let sum = 0;
    let average = 0;
    if (this.length > 0) {
      for (let i = 0; i < this.length; i++) {
        sum += currentNode.val;
        currentNode = currentNode.next;
        average = sum / this.length;
      }
    }
    return average;
  }
  reverse() {
    if (this.length == 0) {
      return "List is empty";
    }
    if (this.length == 1) {
      return;
    }
    let currentNode = this.head;
    while (currentNode) {
      let nextNode = currentNode.next;
      currentNode.next = currentNode.prev;
      currentNode.prev = nextNode;
      currentNode = nextNode;
    }
    let formerTail = this.tail;
    this.tail = this.head;
    this.head = formerTail;
  }
}

module.exports = DoublyLinkedList;
