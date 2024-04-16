// Complete the function stringSize such that it returns an array of the number of characters for every string it receives in the strings parameter.

function stringSize(strings) {
    return strings.map(function(string) {
        return string.length;
    });
}

// Sample usage - do not modify
console.log(stringSize(["a", "and", "even"]));
console.log(stringSize(["Anne", "Brenda", "CSS", "JavaScript"]));
console.log(stringSize(["Goodbye", "Black"]));