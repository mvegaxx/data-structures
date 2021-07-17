import LinkedList from "./index.ts";

Deno.test({
  name: "LLenado y recorrido LinkedList",
  fn(): void {
    console.log();
    const list = new LinkedList();
    const n = 1000000;

    console.time("LLenado");
    for (let i = 0; i < n; i++) {
      list.insert(Math.floor(Math.random() * 10));
    }
    console.timeEnd("LLenado");

    console.time("Recorrido");
    let suma = 0;
    for (let current = list.top; current !== null; current = current.next) {
      suma += current.value;
    }
    console.timeEnd("Recorrido");
    console.log("Suma: " + suma);
  },
});

Deno.test({
  name: "Ingresar valor al medio, al final",
  fn(): void {
    console.log();
    const list = new LinkedList();
    [1, 2, 3, 4, 5, 6].forEach((num) => list.insert(num));
    list.print();
    console.log();
    list.insertAt(0, 4);
    list.print();
  },
});
