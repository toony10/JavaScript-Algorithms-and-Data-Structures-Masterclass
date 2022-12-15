function collectOddNums(nums) {
  let newArr = [];
  if (nums.length === 0) return newArr;
  if (nums[0] % 2 !== 0) {
    newArr.push(nums[0]);
  }
  newArr = newArr.concat(collectOddNums(nums.slice(1)));
  return newArr;
}

collectOddNums([1, 2, 3, 4, 5]);
