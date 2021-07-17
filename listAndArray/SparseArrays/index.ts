import { RowNode } from "./nodes.ts";
import LinkedList from "./LinkedList.ts";

export default class SparseArray {
  top: RowNode = new RowNode();
  bottom: RowNode = new RowNode();

  constructor() {
    this.top.next = this.bottom;
  }

  getValue(row: number, col: number): number | null {
    let currentRow = this.getNode(row);
    if (currentRow === null || !currentRow.value) {
      return null;
    }

    let currentColumn = currentRow.value!.getNode(col);
    if (currentColumn === null || !currentColumn.value) {
      return null;
    }

    return currentColumn.value;
  }

  setValue(value: number, row: number, col: number): void {
    let currentRow = this.getNode(row);
    if (currentRow === null || !currentRow.value) {
      if (value === 0) return;
      else currentRow = this.addNode(row);
    }

    let currentColumn = currentRow.value!.getNode(col);
    if (currentColumn === null || !currentColumn.value) {
      if (value === 0) return;
      else currentColumn = currentRow.value!.addNode(col);
    }
    currentColumn.value = value;
  }

  getNode(index: number): RowNode | null {
    let current = this.top;
    let found = false;
    while (current.next !== this.bottom && !found) {
      current = current.next!;
      if (current.index === index) found = true;
    }
    if (!found) return null;
    return current;
  }

  addNode(index: number): RowNode {
    let current = this.top;
    while (current.next !== this.bottom && current.next?.index! < index) {
      current = current.next!;
    }
    const newNode = new RowNode(current.next, index, new LinkedList());
    current.next = newNode;
    return newNode;
  }
}
