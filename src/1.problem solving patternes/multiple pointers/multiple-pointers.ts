// write a function that acceptes a sorted array of integers. the function should find the first pair where the sum is 0. return an arrau that includes both values that sum is zero or undefined if apair does not exist

// Naive Solution
function sumZeroNaive(arr: number[]): [number, number] | undefined {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return undefined;
}

// Refactor
function sumZero(arr: number[]): [number, number] | undefined {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return undefined;
}

sumZero([-3, -2, -1, 0, 1, 2, 3]);
