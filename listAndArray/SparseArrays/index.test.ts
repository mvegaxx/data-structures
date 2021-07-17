import SparseArray from "./index.ts";
Deno.test({
  name: "Set and get value",
  fn(): void {
    console.log();
    const array = new SparseArray();

    array.setValue(0, 2, 3);

    console.log(array.getValue(2, 3));
  },
});
