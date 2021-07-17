import { ColumnNode } from "./nodes.ts";

class LinkedList {
  top: ColumnNode = new ColumnNode();
  bottom: ColumnNode = new ColumnNode();

  constructor() {
    this.top.next = this.bottom;
  }

  getNode(index: number): ColumnNode | null {
    let current = this.top;
    let found = false;
    while (current.next !== this.bottom && !found) {
      current = current.next!;
      if (current.index === index) found = true;
    }
    if (!found) return null;
    return current;
  }

  addNode(index: number): ColumnNode {
    let before = this.top;
    while (before.next !== this.bottom && before.next?.index! < index) {
      before = before.next!;
    }
    const newNode = new ColumnNode(before.next, index);
    before.next = newNode;
    return newNode;
  }
}

export default LinkedList;
