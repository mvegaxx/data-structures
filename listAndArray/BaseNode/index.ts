class Node {
  value: Value;
  next: Node | null;
  constructor(value: Value, next: Node | null) {
    this.value = value;
    this.next = next;
  }
}

export default Node;
export type Value = number;
