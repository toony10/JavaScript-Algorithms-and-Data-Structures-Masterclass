// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str: string): boolean {
  // add whatever parameters you deem necessary - good luck!
  let newStr = "";
  function helper(hInput: string): void {
    if (hInput.length === 0) {
      return;
    }
    newStr += hInput[hInput.length - 1];
    helper(hInput.slice(0, -1));
  }
  helper(str);
  return str.split("").reverse().join("") === str;
}