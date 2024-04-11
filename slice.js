
// slice (has similarity with substring)

let text = "apple, orange, grapefruit";
let part = text.slice(7,13)  // --> orange
let fruits = text.slice(7) //--> orange, grapefruit
let fruit = text.slice(-10) //--> grapefruit

console.log(part);
