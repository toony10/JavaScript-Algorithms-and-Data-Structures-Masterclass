"use strict";
// Ascending order
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                //SWAP!
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        console.log('One Pass completed');
    }
    return arr;
}
// ES6
function bubbleSortES6(arr) {
    const Swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            // ✅ Fix: should be "j < i - 1"
            if (arr[j] > arr[j + 1]) {
                Swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}
bubbleSort([10, 15, 6, 7, 22, 100, 2]);
// [2, 6, 7, 10, 15, 22, 100]
