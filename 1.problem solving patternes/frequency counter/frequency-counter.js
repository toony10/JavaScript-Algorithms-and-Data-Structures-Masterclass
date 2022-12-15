// write a function called same, which accepts tow arrays. the function should return true if every value in the array has it's corresponding vlaue squared in the second array. the frequancy of values must be the same

// first solution
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
}

// Refactored
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequancyCounter1 = {};
  let frequancyCounter2 = {};
  for (let val of arr1) {
    frequancyCounter1[val] = (frequancyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequancyCounter2[val] = (frequancyCounter2[val] || 0) + 1;
  }
  for (let key in frequancyCounter1) {
    if (!(key ** 2 in frequancyCounter2)) {
      return false;
    }
    if (frequancyCounter2[key ** 2] !== frequancyCounter2[key]) {
      return false;
    }
  }
  return true;
}
