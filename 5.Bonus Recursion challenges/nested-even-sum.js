// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(object) {
  let sum = 0;

  function helper(object) {
    // console.log(object); //For Debug Purpose
    let values = Object.values(object);
    if (values[0] instanceof Object) {
      helper(values[0]); // Call recursively but do not return
    } else if (values[0] % 2 === 0) {
      sum += values[0];
    }
    delete object[Object.keys(object)[0]];
    if (Object.keys(object).length === 0) {
      return;
    }
    return helper(object);
  }
  helper(object);
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
