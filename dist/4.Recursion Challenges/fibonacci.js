"use strict";
function fib(n, memo = {}) {
    if (n <= 0)
        throw new Error("n must be a positive integer");
    if (n in memo)
        return memo[n];
    if (n <= 2)
        return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}
// اختبارات
console.log(fib(50)); // 12586269025
