import bubbleSort from "./bubblesort.ts";
import MergeSort from "./mergesort.ts";
import quickSort from "./quickSort.ts";
import HeapSort from "./heapsort.ts"
import countingSort from "./countingSort.ts"

// generate array with random numbers
const NUMBER_OF_ITEMS = 10000000;

/// arrray of random numbers
const array = [];
for (let index = 0; index < NUMBER_OF_ITEMS; index++) {
  array.push(Math.floor(Math.random() * NUMBER_OF_ITEMS) + 1);
}


/// time comparasion

// BUBBLESORT O(N**2)
console.time(`bubble sort ${NUMBER_OF_ITEMS}`);
// bubbleSort(array)
console.timeEnd(`bubble sort ${NUMBER_OF_ITEMS}`);

// MERGESORT O(N log N)
console.time(`merge sort ${NUMBER_OF_ITEMS}`);
// MergeSort(array)
// console.log(MergeSort(array))
console.timeEnd(`merge sort ${NUMBER_OF_ITEMS}`);

// HEAPSORT O(N log N)
console.time(`heapsort sort ${NUMBER_OF_ITEMS}`);
const heap = new HeapSort()
// console.log(heap.sort(array))
console.timeEnd(`heapsort sort ${NUMBER_OF_ITEMS}`);

// QUICKSORT O(N log N)
console.time(`quick sort ${NUMBER_OF_ITEMS}`);
// quickSort(array)
console.timeEnd(`quick sort ${NUMBER_OF_ITEMS}`);


// COUNTINGSORT O(N + M)
console.time(`bubble sort ${NUMBER_OF_ITEMS}`);
countingSort(array,1 ,NUMBER_OF_ITEMS )
// console.log(countingSort(array,1 ,NUMBER_OF_ITEMS))
console.timeEnd(`bubble sort ${NUMBER_OF_ITEMS}`);




