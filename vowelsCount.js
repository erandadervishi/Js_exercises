// Count the Number of Vowels in a String:
// // Write a function that takes a string as a parameter and returns the number of vowels (a, e, i, o, u) in that string.




function vowelsCount(str) {

    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let vowelsCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            vowelsCount ++;
    }
}

return vowelsCount;
}

console.log(vowelsCount("JavaScript is Awesome"));
console.log(vowelsCount("Practicing is the key."));
console.log(vowelsCount("You Should Have Faith In what YOU do."));


