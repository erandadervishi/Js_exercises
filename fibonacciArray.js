// Fibonacci Array
// Fibonacci numbers have been studied for years and appear often in nature. Write a function that will return an array of Fibonacci numbers up to a given length n. Fibonacci numbers are calculated by adding the last two values in the sequence together. So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.


function fibonacciArray(n) {

    const fibArr = [0, 1];
    for (let i = 2; i < n; i++) {

        // Apply basic Fibonacci formulae
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2];    
}
    return fibArr;
}

let result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
