function sayHi (num: number)
{
    if (num >= 10)
    {
        console.log('Hi, Welcome back!')
        return;
    }
    console.log(num)
    num++;
    sayHi(num)
}

sayHi(1)