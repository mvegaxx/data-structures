import Node from "../BaseNode/index.ts";

class LinkedList {
  top: Node | null;

  constructor() {
    this.top = null;
  }
  print() {
    for (let current = this.top; current !== null; current = current.next) {
      console.log(current.value);
    }
  }

  insert(value: any) {
    const node = new Node(value, this.top);
    this.top = node;
  }

  insertAt(value: number, pos: number) {
    let count = 1;
    let before = this.top;
    if (before) {
      while (count < pos - 1 && before.next !== null) {
        count++;
        before = before.next;
      }
      if (before?.next) {
        const node = new Node(value, before.next);
        before.next = node;
      }
    }
  }

  insertAtEnd(value: number) {
    let before = this.top;
    if (before) {
      while (before.next !== null) {
        before = before.next;
      }
      const node = new Node(value, before.next);
      before.next = node;
    }
  }

  remove() {
    if (this.top) {
      this.top = this.top.next;
    }
  }
}

export default LinkedList;
