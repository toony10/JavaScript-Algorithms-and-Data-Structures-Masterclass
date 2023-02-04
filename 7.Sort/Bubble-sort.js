// Ascending order
function bubbleSort(arr)
{
    for (let i = arr.length; i > 0; i--)
    {
        for (let j = 0; j < i - 1; j++)
        {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1])
            {
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
function bubbleSort(arr)
{
    const Swap = (arr, num1, num2) =>
    {
        [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
    };
    for (let i = arr.length; i > 0; i--)
    {
        for (let j = 0; j < j - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                Swap(arr, arr[j], arr[j + 1]);
            }
        }
    }
}

bubbleSort([10, 15, 6, 7, 22, 100, 2]);

// [2, 6, 7, 10, 15, 22, 100]