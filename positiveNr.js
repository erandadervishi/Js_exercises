// Complete the function sumPositiveNr such that it returns the sum of all positive numbers from the numbers parameter it receives.

function sumPositiveNr(numbers) {
    let sum = 0;
    numbers.forEach(function(number){
        if (number >= 0 ) {
                sum= sum + number;
        }
    });
    return sum;
    }
    
    console.log(sumPositiveNr([15, -5, 10, 14, 8]));
    console.log(sumPositiveNr([-3, 4, -2, 1, -9, 2, 3, 7, -8])); 