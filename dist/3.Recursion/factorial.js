"use strict";
// factorial function by Recursion
function factorial(num) {
    if (num === 1)
        return 1;
    return num * factorial(num - 1);
}
// factorial(5);
//       5 * factorial(4)
//              4 * factorial(3)
//                      3 * factorial(2)
//                                2 * factorial(1)
//                                         1
// ===============summure===============
//       5 *  4 *  3 *  2 * 1 = 120
