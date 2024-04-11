//Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.  
// char_rem => character remove

function remove_character(str, char_rem) {

    part1 = str.substring(0, char_rem);
    part2 = str.substring(char_rem + 1, str.length);

    return (part1 + part2);
}

console.log(remove_character("Javascript", 0));
console.log(remove_character("Javascript", 10));
console.log(remove_character("Javascript", 4));