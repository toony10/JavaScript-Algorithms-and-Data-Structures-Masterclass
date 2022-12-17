// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  let newStr = "";
  function helper(hInput) {
    if (hInput.length === 0) {
      return;
    }
    newStr += hInput[hInput.length - 1];
    helper(hInput.slice(0, -1));
  }
  helper(str);
  return newStr;
}

reverse("ANTON");
