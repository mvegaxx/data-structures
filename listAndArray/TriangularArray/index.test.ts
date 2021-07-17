import TriangularArray from "./index.ts";
Deno.test({
  name: "set y get",
  fn(): void {
    console.log();
    const array = new TriangularArray(5);
    array.setValue(5, 2, 3);

    console.log(array.getValue(3, 2));
  },
});
