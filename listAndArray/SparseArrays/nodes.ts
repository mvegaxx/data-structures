import LinkedList from "./LinkedList.ts";
export class RowNode {
  index?: number;
  next?: RowNode;
  value?: LinkedList;
  constructor(
    next?: RowNode,
    index?: number,
    value?: LinkedList,
  ) {
    this.index = index;
    this.next = next;
    this.value = value;
  }
}

export class ColumnNode {
  index?: number;
  next?: ColumnNode;
  value?: number;
  constructor(
    next?: ColumnNode,
    index?: number,
    value?: number,
  ) {
    this.index = index;
    this.next = next;
    this.value = value;
  }
}
