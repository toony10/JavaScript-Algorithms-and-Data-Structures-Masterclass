function collectOddNums (arr: number[]): number[]
{
  let result: number[] = [];
  function helper (helperArr: number[])
  {
    if (helperArr.length === 0)
    {
      return
    }
    if (helperArr[0] % 2 !== 0)
    {
      result.push(helperArr[0]);
    }
    helper(helperArr.slice(1));
  }
  helper(arr);
  return result;
}

collectOddNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
