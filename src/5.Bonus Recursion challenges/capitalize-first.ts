// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(words: string[]): string[] {
  let newWords: string[] = [];
  if (words.length === 0) {
    return newWords;
  }
  let captlize = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  newWords.push(captlize);
  newWords = newWords.concat(capitalizeFirst(words.slice(1)));
  return newWords;
}

capitalizeFirst(["car", "taco", "banana"]); // ['Car','Taco','Banana']
