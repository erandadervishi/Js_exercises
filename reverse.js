//Write a JavaScript program to reverse a given string.


const reverse = (string) => {
    return string.split("").reverse().join("");
};

console.log(reverse("HTML"));
console.log(reverse("Goggle"));
console.log(reverse("Linkedin"));
