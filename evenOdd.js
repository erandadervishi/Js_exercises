// Complete the function evenOrOdd such that it returns the string "even" when the number parameter it receives is even and "odd" otherwise.
// Can you make it work with negative numbers too?


evenOrOdd = function(number) {
    if (number % 2 ===0) {
        return "even";
    }
    else {
        return "odd";
    }
}

console.log(evenOrOdd('120'));
console.log(evenOrOdd('25'));
console.log(evenOrOdd('-9'));
console.log(evenOrOdd('-12'));