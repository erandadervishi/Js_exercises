// Find the Longest Word in a Sentence:
// Write a function that takes a sentence as a parameter and returns the longest word in the sentence.

function findLongestWord(str) {
    let longestWord = str.split(' ').sort(function (a, b) { return b.length - a.length; });
    return longestWord[0] + " " + longestWord[0].length;
}

console.log(findLongestWord("Refactoring is a systematic process of improving"));
console.log(findLongestWord("Clean code is code that is easy to read"));
console.log(findLongestWord("Conditionals tend to get more and more complicated"));