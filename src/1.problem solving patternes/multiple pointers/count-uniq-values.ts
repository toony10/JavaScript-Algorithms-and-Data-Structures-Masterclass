// implement a function that called countUniqueValues that accepts a sort array and counts the unique value in the array.there can be nigative numbers in the array but it always be sorted

function countUniqueValues(arr: number[]): number {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

countUniqueValues([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]);
