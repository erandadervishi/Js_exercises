
//Write a JavaScript program to convert letters of a given string alphabetically.  

const convertAlphabetically = (word) => {
    return word.split("").sort().join("");
};

console.log(convertAlphabetically("precision"));
console.log(convertAlphabetically("America"));
