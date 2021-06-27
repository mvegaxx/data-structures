export default function bubbleSort(array: number[]): number[] {
  let stepCpunter: number = 0; 
  array = array.slice(); // creates a copy of the array
  
  
  // for iside a for means n square (n2) 
  // console.time("bublesort")
  // first for its (N)
  for(let i = 0; i < array.length; i++) {
    
    // second for its (N * N)
      for(let j = 0; j < array.length - 1; j++) {
          stepCpunter += 1;
          // console.log(i, j) // inspect steps inside

          if(array[j] > array[j + 1]) {
              let swap = array[j];
              array[j] = array[j + 1];
              array[j + 1] = swap;
          }
      }
  }
  // console.timeEnd("bublesort")
  // console.log(stepCpunter)
  return array;
}