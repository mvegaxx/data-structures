export default function quickSort(list: number[]): number[] {
  if (list.length < 2) 
    return list;  let pivot = list[0];
  let left  = []; 
  let right = [];  for (let i = 1, total = list.length; i < total; i++){
    if (list[i] < pivot)
      left.push(list[i]);
    else
      right.push(list[i]);
  }  return [
    ...quickSort(left), 
    pivot, 
    ...quickSort(right)
  ];
};