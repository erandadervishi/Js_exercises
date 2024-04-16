//Check for Palindrome: Write a function that takes a string as a parameter and returns true if the string is a palindrome (reads the same forwards and backwards), otherwise returns false.


function palindrome(str) {
	let reverse = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reverse += str[i];
	}
	if (reverse == str) {
		return true
	} else {
		return false;
	}
}

console.log(palindrome("repaper"));
console.log(palindrome("noon"));
console.log(palindrome("raid"));
