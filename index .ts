import {
  bubbleSort,
  countingSort,
  heapSort,
  mergeSort,
  quickSort,
} from "./sorting/mod.ts"

// generate array with random numbers
const NUMBER_OF_ITEMS = 100_000_000;

/// arrray of random numbers
const array = [];
for (let index = 0; index < NUMBER_OF_ITEMS; index++) {
  array.push(Math.floor(Math.random() * NUMBER_OF_ITEMS) + 1);
}
// console.log(array)


function timeToSort(algoritm: Function, array: number[]) {
  console.time(`${algoritm.name} sorting ${NUMBER_OF_ITEMS}`);
  console.log(algoritm(array, 1, NUMBER_OF_ITEMS));
  console.timeEnd(`${algoritm.name} sorting ${NUMBER_OF_ITEMS}`);
}


/// time comparasion

// // MERGESORT O(N log N)
 timeToSort(countingSort, array)

// // BUBBLESORT O(N**2)

// // HEAPSORT O(N log N)

// // QUICKSORT O(N log N)

// // COUNTINGSORT O(N + M)
