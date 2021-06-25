const getLast = (items: any) => items[items.length - 1];

let last1 = getLast(["a", "b", "c", "d"]); // d (1 iteration)
let last2 = getLast(["a", "b", "c", "d", "e", "f", "g"]); // g(1 iteration)
