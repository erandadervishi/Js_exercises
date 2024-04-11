//Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 30 or if their sum is 30.

function check (x, y) {
    return ((x == 30 || y == 30) || (x + y == 30));
}
console.log(check(15,2));
console.log(check(30,0));
console.log(check(28,2));

