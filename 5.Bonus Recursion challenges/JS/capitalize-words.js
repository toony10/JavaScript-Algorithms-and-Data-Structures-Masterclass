// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
function capitalizeWords(words) {
    var newWords = [];
    if (words.length === 0) {
        return newWords;
    }
    var captlize = words[0].toUpperCase();
    newWords.push(captlize);
    newWords = newWords.concat(capitalizeWords(words.slice(1)));
    return newWords;
}
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
