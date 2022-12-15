// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

function areThereDuplicates(...inputs) {
  // good luck. (supply any arguments you deem necessary.)
  let arr = Array.from(inputs, (x) => x);
  let frequencycounter = {};
  for (let val of arr) {
    frequencycounter[val] = (frequencycounter[val] || 0) + 1;
  }
  for (let key in frequencycounter) {
    if (frequencycounter[key] > 1) {
      return true;
    }
  }
  return false;
}

// anouther solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
