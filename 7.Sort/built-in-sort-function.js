// if a - b result is negative number so (a) will come bafore (b)
// if a - b result is positive number so (b) will come bafore (a)

//          -      +
//          a      b

function compaer(a, b)
{
    return a - b;
}

[10, 15, 6, 7, 22, 100, 2].sort(compaer);

// [2, 6, 7, 10, 15, 22, 100]

