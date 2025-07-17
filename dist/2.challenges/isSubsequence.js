"use strict";
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
// Examples:
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    let p1 = 0, p2 = 0;
    while (p1 < str1.length && p2 < str2.length) {
        if (str1[p1] === str2[p2]) {
            p1++;
            p2++;
        }
        else {
            p2++;
        }
    }
    return p1 === str1.length;
}
