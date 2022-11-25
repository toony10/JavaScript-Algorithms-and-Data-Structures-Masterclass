// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  let arr1 = Array.from(String(num1), (x) => Number(x));
  let arr2 = Array.from(String(num2), (x) => Number(x));

  if (arr1.length !== arr2.length) {
    return false;
  }
  let frquencyCounter1 = {};
  let frquencyCounter2 = {};
  for (let val of arr1) {
    frquencyCounter1[val] = (frquencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frquencyCounter2[val] = (frquencyCounter2[val] || 0) + 1;
  }
  for (let key in frquencyCounter1) {
    if (!(key in frquencyCounter2)) {
      return false;
    }
  }
  return true;
}
