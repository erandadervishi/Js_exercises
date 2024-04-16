// Complete the function sumOddNeg such that it returns the sum of all the odd numbers from the numbers parameter it receives.
// The function should also work for negative numbers.

function sumOddNeg(numbers) {
    let sum = 0;
    numbers.forEach(function(number) {
        if (number % 2 !== 0)
        sum +=number
    });
    return sum;
}

console.log(sumOddNeg([15, 5, 10, -3, -2])); 
console.log(sumOddNeg([2, 3, 4, 5, 6, -1])); 
console.log(sumOddNeg([-2, -3, 4, 5, 6])); 