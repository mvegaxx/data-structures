Deno.test({
  name: "LLenado y recorrido array",
  fn(): void {
    console.log();
    const array = [];
    const n = 1000000;

    console.time("LLenado");
    for (let i = 0; i < n; i++) {
      array[i] = Math.floor(Math.random() * 10);
    }
    console.timeEnd("LLenado");

    console.time("Recorrido");
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
      suma += array[i];
    }

    console.timeEnd("Recorrido");
    console.log("Suma: " + suma);
  },
});
