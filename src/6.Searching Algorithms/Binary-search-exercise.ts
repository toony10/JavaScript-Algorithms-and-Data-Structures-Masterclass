function binarySearch(sortedArray: number[], key: number): number {
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (sortedArray[middle] === key) {
      // found the key
      return middle;
    } else if (sortedArray[middle] < key) {
      // continue searching to the right
      start = middle + 1;
    } else {
      // search searching to the left
      end = middle - 1;
    }
  }
  // key wasn't found
  return -1;
}

//
// Examples:
//
// binarySearch([1, 2, 3, 4, 5], 2); // 1
// binarySearch([1, 2, 3, 4, 5], 3); // 2
// binarySearch([1, 2, 3, 4, 5], 5); // 4
// binarySearch([1, 2, 3, 4, 5], 6); // -1
// binarySearch([
//     5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//     40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 10); // 2
// binarySearch([
//     5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//     40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95); // 16
// binarySearch([
//     5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//     40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100); // -1
