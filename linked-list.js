/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
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
      this.head = newNode;
      this.length += 1;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length == 0) {
      throw "List is empty";
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next == this.tail || this.head == this.tail) {
        const formerTail = this.tail;
        this.tail = currentNode;
        this.length -= 1;
        if (this.length == 1) {
          this.head = currentNode;
        }
        if (this.length == 0) {
          this.head = null;
          this.tail = null;
        }
        return formerTail.val;
      } else {
        currentNode = currentNode.next;
      }
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
      this.shift();
      this.unshift(val);
      return;
    }
    if (idx == this.length - 1) {
      this.pop();
      this.push(val);
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
      }
      average = sum / this.length;
    }
    return average;
  }
}

module.exports = LinkedList;
