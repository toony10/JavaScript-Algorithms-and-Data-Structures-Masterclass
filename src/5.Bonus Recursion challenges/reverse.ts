// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str: string): string
{
  let newStr: string = "";
  function helper(hInput:string)
  {
    if (hInput.length === 0)
    {
      return;
    }
    newStr += hInput[hInput.length - 1];
    helper(hInput.slice(0, -1));
  }
  helper(str);
  return newStr;
}

console.log(reverse("ANTON"));
