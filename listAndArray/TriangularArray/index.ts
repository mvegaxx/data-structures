class TriangularArray {
  rows: number;
  values: number[];
  constructor(rows: number) {
    this.rows = rows;
    this.values = [];
  }

  getIndex(row: number, col: number) {
    if (row < col) {
      const aux = row;
      row = col;
      col = aux;
    }
    return row * (row - 1) / 2 + col;
  }

  setValue(value: number, row: number, col: number) {
    this.values[this.getIndex(row, col)] = value;
  }
  
  getValue(row: number, col: number) {
    return this.values[this.getIndex(row, col)];
  }
}

export default TriangularArray;
